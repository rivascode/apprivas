import React, { useState, useContext } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from "../ItemCount/ItemCount"
import { LinkContainer } from 'react-router-bootstrap'
import contexto from "../../Context/contexto"


const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState()
    const { carrito, addItem, } = useContext(contexto);


    let cantidad;
    let yaExiste = carrito.find((producto) => producto.id === item.id);
    if (yaExiste) {
        cantidad = parseInt(carrito.filter((producto) => producto.id === item.id).map((producto) => producto.cantidad));      
    
    } else {
        cantidad = parseInt(item.cantidad);      
    }

    const onAdd = (cantidad) => {
        setUnidades(cantidad)
    }
    if (unidades > 0) {
        return (
            <>
                <div className="row d-flex justify-content-center flex-wrap mt-5 pt-5">
            <div className="col-md-10">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images p-0">
                                <div className="text-center p-0">
                                    <img id="main-image" src={item.pictureUrl} className="card-img-top" />
                                    <p className="about text-center">Id: {item.id}  - Categoria: {item.categoria}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product p-4">
                                <div className="mt-4 mb-3 text-center">
                                    <h5 className="text-uppercase text-center fw-bold">{item.Title} - ${item.Price}</h5>
                                </div>
                                <p className="about text-center">{item.Description}</p>
                                <div className="itemAddToCart">
                                <ItemCount stock={item.Stock} cantidad={cantidad} addItem={() => addItem(item, unidades)} initial={item.Stock >= 1 ? 1 : 0} onAdd={onAdd} />

                                <LinkContainer to="/cart"><Button class="glty-bttn-outline glty-bttn-outline-terceary btncompra" onClick={() => addItem(item, unidades)}>Terminar mi Compra</Button></LinkContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    } else {
        return (
            <>
                <div className="row d-flex justify-content-center flex-wrap mt-5 pt-5">
            <div className="col-md-10">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images p-0">
                                <div className="text-center p-0">
                                    <img id="main-image" src={item.pictureUrl} className="card-img-top" />
                                    <p className="about text-center">Id: {item.Id}  - Categoria: {item.CategoriaId}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product p-4">
                                <div className="mt-4 mb-3 text-center">
                                    <h5 className="text-uppercase text-center fw-bold">{item.Title} - ${item.Price}</h5>
                                </div>
                                <p className="about text-center">{item.Description}</p>
                                <div className="itemAddToCart">
                                <ItemCount stock={item.Stock} initial={item.Stock >= 1 ? 1 : 0} onAdd={onAdd} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }

}

export default ItemDetail



