import React, { useContext } from 'react'
import contexto from "../../Context/contexto"
import { Link } from "react-router-dom";
import 'react-bootstrap-icons'
import "../ItemCart/itemCart.css"
import tachito from "../../img/trash.svg"


const ItemCart = ({ product }) => {
    
    const { removeItem, calcularTotal } = useContext(contexto);
    
    let subtotal = product.Price * product.cantidad;
    calcularTotal();
    

    return (
    <>
        <div className="row itemsCart">

        <div className="col-md-12">
        <ul>
        <li className="itemsCart">
        <Link to={`/item/${product.id}`}>
            <img className="imgCart" src={product.pictureUrl} alt="{product.title}"></img>
        </Link>

        <p> {product.cantidad} {product.Title} - Precio: ${product.Price} <br/>Subtotal: $ {subtotal}</p>
 
        <button id="TrashBin" onClick={() => removeItem(product.Id)}><img id="imgTrashBin" src={tachito} /></button>
        </li>
        </ul>
        
        </div>

        <div className="row">
            
        <div className="col-md-12"></div>
        <div className="StockQuantityNote mt-2">
            <p>* Stock disponible de {product.Title}: {product.Stock} unidad/es.
             Para cambiar la cantidad clickeá en la imágen del producto!</p>
        </div>
        </div>
        </div>
    </>
    )
}

export default ItemCart