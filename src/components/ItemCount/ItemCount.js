import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
const [contador, setContador] = useState(initial)

const restarContador = () =>{
    if (contador > initial) {
        setContador(contador -1);
    }
}

const sumarContador = () => {
    if (contador < stock ) {
        setContador(contador +1);
    }
}

const confirmar = () => {
    if(stock > 0){
        onAdd(contador)
    }
}

    return (
        <>
        <div className="ItemCount-text-center">
            <button className="btn btn-danger m-4" onClick={restarContador}>-</button>
            <p className="ItemCount-text-contador">Cantidad: {contador}</p>
            <button className="btn btn-danger m-4" onClick={sumarContador}>+</button>
                <div>
                    <button class="glty-bttn-outline glty-bttn-outline-terceary btncompra"onClick={confirmar}>Agregar al Carrito</button>
                </div>
        </div>
        </>
    )
}

export default ItemCount
