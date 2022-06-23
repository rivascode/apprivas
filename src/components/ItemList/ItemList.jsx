import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div className="itemList">
        {
            items.map((producto)=>{
                return <Item item={producto} key={producto.id}/>
            })
        }
    </div>
  )
}
export default ItemList;