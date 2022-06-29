import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    function add(){
      if(count < stock){
        setCount(count + 1)
      }
    }

    function remove() {
      if(count > 1){
        setCount(count - 1)
      }
    }

    const addCarrito = () => {
      onAdd(count)
    }


  return (
    <div>
      <p className='text-center' style={{fontSize: '1rem'}}>
        Stock: {stock} Unidades
      </p>
        <div className="d-flex">
            <button className="btn btn-sm btn-outline-dark me-1" onClick={remove}>-</button>
            <div className="w-100 text-center border border-1 border-secondary rounded">{count}</div>
            <button className="btn btn-sm btn-outline-dark ms-1" onClick={add}>+</button>
        </div>
        <button className="btn btn-dark mt-2 w-100" onClick={addCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount