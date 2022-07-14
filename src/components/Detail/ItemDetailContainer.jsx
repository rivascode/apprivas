import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router";
import {firestore} from "../../firebase";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()


    useEffect(() => {
        const db = firestore
        const collection =db.collection("items")
        
        if (params.id) {
            const filtro = collection.doc(params.id)
            const query = filtro.get()
            query.then((resultados) => {

                const id = resultados.id
                const data = resultados.data()
                
                const data_final = { id, ...data }
                setProducto(data_final)
            }).catch((error) => {
            }).finally(() => {
                setEstado("terminado");
            });

        } else {
            setEstado("terminado")
        }


    }, [params.id])

    if (estado === "pendiente") {
        return (
            <div>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        )
    } else {

        return (
            <div id="ItemDetailContainer">
              <ItemDetail item={producto} />
            </div>
        )
    }
}

export default ItemDetailContainer