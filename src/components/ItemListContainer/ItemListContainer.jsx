import React,{useState,useEffect} from 'react';
import  productos  from '../../mock/productos';
import './ItemListContainer.css';
import  ItemList  from '../ItemList/ItemList';
const ItemListContainer = ({greeting}) => {
  //useEffect no bloquea el renderizado del DOM, lo que está dentro del useEffect se va a ejecutar cuando se monte el componente.
  const [products,setProductos] = useState([])
  useEffect(()=>{
    const traerProductos = new  Promise((res,rej)=>{
      setTimeout(() => {
        res(productos)
      }, 2000);
    })
    traerProductos
    .then((res)=>{
      setProductos(res);
    })
  },[]) 
  return (
    <div className='itemListCont'>
      <h1>{greeting}</h1>
      <ItemList items={products}/>
    </div>
  )
}
export default ItemListContainer;