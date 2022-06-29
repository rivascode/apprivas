import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then(res => 
        setProducts(res.find(item => item.id === parseInt(id)))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))

    return () => {};
  }, []);


  return (
    <>
      {
        loading ?
        <div className="d-flex justify-content-center" style={{marginTop: '5rem', marginBottom: '10rem'}}>
          <div className="spinner-grow justify-content-center" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
        :
        <ItemDetail 
          productos={products}
        />   
      }
    </>
  );
};

export default ItemDetailContainer;
