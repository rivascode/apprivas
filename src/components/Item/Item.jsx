import React from 'react'
import './Item.css'
const Item = ({item}) => {
  return (
    <div id='itemContainer'>
      <img src={item.imagen} alt={item.descripcion}/>
      <p>{item.nombre}</p>
      <p>{item.precio}</p>
      <a href="">Ver detalles</a>
    </div>
  )
}

export default Item