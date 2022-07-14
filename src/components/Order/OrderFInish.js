import contexto from "../../Context/contexto"
import { useContext, useEffect, useState } from 'react';
import { firestore} from "../../firebase";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import "../Order/OrderFinish.css";


const OrderFinish = () => {

    const {idCompra} = useContext(contexto);
    const [Id_Order, setId_Order] = useState();
    const [items_Order, setItems_Order] = useState([]);
    const [compradorData, setcompradorData] = useState({});
    const [precioTotal, setPrecioTotal] = useState();
    const [estado, setEstado] = useState();

    useEffect( () => {
        const database = firestore.collection("orders").doc(idCompra);
        database.get().then( (compra) => { 
            const orderInfo = compra.data();
            const orderTotal = orderInfo.total;
            
            setItems_Order([...orderInfo.items]);
            setcompradorData({...orderInfo.comprador});
            setPrecioTotal(orderTotal);
            setId_Order(compra.id);
        })
            .catch((error) => {
                return error ;
            })
            .finally( ()=>{
                setEstado(false);
            })
        },[idCompra]);
        
        return (
            <>
            { estado
            ? <Spinner animation="border" role="status" className="d-block m-auto" >
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
            : <div id="OrderFinish">
                <h2 className="text-center mb-5">Gracias por tu compra!</h2>
                <div className="row text-center">
                    <div class="col-md-12">
                <strong>Tu Nro de Orden es:</strong> <span>{Id_Order}</span>
                    </div>
                </div>

                <div className="row text-center">
                <strong>Total de la compra:</strong> <span>${precioTotal}</span>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <Button id="btnTienda" className="glty-bttn-outline glty-bttn-outline-terceary mt-5"><Link to={`/home`}>Volver al Home</Link></Button>
                    </div>
                </div>
            </div>
        }
    </>
        )
}

export default OrderFinish