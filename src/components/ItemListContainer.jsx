import React, { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getFetch
      .then((res) => {
        setProducts(res);
      })
      .then(() => console.log(products))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  console.log(products);

  return (
    <main className="container-fluid d-flex-column justify-content-evenly bg-light py-5">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          fontWeight: "bold",
        }}
      >
        {greeting}
      </h2>
      <div className="container-fluid d-flex justify-content-evenly">
        <ItemList productos={products} />
      </div>
    </main>
  );
};

export default ItemListContainer;
