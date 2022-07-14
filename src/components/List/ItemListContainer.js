import React, { useEffect, useState } from "react";
import ItemList from "../List/ItemList"
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import { firestore } from "../../firebase";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    useEffect(() => {
        const db = firestore
        const collection =db.collection("items")

        if (params.id){
            const filtro = collection.where("categoria", "==", params.id)
            const query = filtro.get()
    
            query.then((resultados) => {
                
                const resultados_parseado = []
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
               
            }).finally(() => {
                setEstado("terminado");
            });
        
        } else {
            const query = collection.get()
            query.then((resultados) => {
                const resultados_parseado = []
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
              
            }).finally(() => {
                setEstado("terminado");
            });

        }
        
    }, [params.id])
    if (estado === "pendiente") {
        return (
            <>
                <h1 className="GreetingTitle" >{greeting}</h1>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </>
        )
    } else {

        return (
            <>
                <div id="ItemListContainer">
                <ItemList productos={productos} />
                </div>
            </>
        )
    }

}
export default ItemListContainer