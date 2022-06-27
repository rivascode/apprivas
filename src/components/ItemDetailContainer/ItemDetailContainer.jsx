import React,{useState,useEffect} from 'react';
import  productos  from '../../mock/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    useEffect(()=>{
      const traerProducto = new  Promise((res,rej)=>{
        setTimeout(() => {
          res(productos[0])
        }, 2000);
      })
      traerProducto
      .then((res)=>{
        setProducto(res);
      })
    },[]) 
    return (
      <div className='itemListCont'>
        <h1></h1>
        <ItemDetail item={producto}/>
      </div>
    )
}

export default ItemDetailContainer