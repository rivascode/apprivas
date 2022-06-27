import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({item}) => {
  return (
    <div className='itemDetail'>
        <img src={item.imagen} alt=""  id='imgDetalle'/>
        <h2 id='nombreDetalle'>{item.nombre}</h2>
        <span>{item.descripcion}</span>
        <span>{item.stock}</span>
        <span>{item.precio}</span>
    </div>
  )
}

export default ItemDetail