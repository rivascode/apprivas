import React from 'react';
import './ItemListContainer.css';
export const ItemListContainer = (props) => {
  return (
    <div className='itemListCont'><h1>{props.greeting}</h1></div>
  )
}
