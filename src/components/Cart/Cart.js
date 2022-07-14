import contexto from "../../Context/contexto"
import React, { useState, useContext } from 'react'
import { Container } from "react-bootstrap";
import ItemCart from "../ItemCart/ItemCart";
import OrderForm from "../Order/OrderForm";
import OrderFinish from "../Order/OrderFInish";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../Cart/cart.css";
import Cross from "../../img/x-circle-fill.svg";
import Continue from "../../img/arrow-right-circle-fill.svg";

const Cart = () => {
   
    const {carrito, clear, precioTotal} = useContext(contexto);
    const [finalizar, setFinalizar] = useState(false);
    const [mostrarResumen, setMostrarResumen] = useState(false);
    
    const checkout = () => {
        setFinalizar(!finalizar);
    }
    const resumen = () => {
        setMostrarResumen(!mostrarResumen);
    }

    return (
        <Container id="Cart" className="fluid" >
            <h2>Carrito de compras</h2>

            <ul>
                {carrito.length > 0 ? carrito.map(product => { return <ItemCart product={product} key={product.id} /> }) : <article><div className="carritoVacio">No hay productos en el carrito. Visitá nuestra <Link to={`/tienda`}><span className="sin_items">Tienda</span></Link></div></article>}
            </ul>

            
            {carrito.length > 0 ?
                <div className="total"><div className="importeTotal"><p>Total a Pagar: $<span>{precioTotal}</span></p></div></div>: null
            }
                        
            <div className="row">
                <div className="col-md-4">
            {carrito.length > 0 ? <Button className="btnVaciarCarrito" onClick={clear}><img id="imgCross" src={Cross} /> Vaciar Carrito</Button> : null}
                </div>
                <div className="col-md-4">
            {carrito.length > 0 ? <Link to={`/tienda`}> <Button className="btnSeguirComprando"><img id="imgContinue" src={Continue} /> Seguir Comprando</Button> </Link> : null}
            </div>

            <div className="col-md-4">
            {carrito.length > 0 ? <Button onClick={checkout} id="btnCheckout" className="glty-bttn-outline glty-bttn-outline-terceary btncompra">Finalizar Compra</Button> : null}
            </div>
            
            { finalizar ? <OrderForm checkout={checkout} resumen={resumen} /> 
            : null
            }

            { mostrarResumen 
            ? <OrderFinish />
            : null
            }
            </div>

        </Container>
    )
}

export default Cart
