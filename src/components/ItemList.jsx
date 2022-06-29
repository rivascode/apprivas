import React from "react";
import Item from "./Item";
/* import ItemCount from "./ItemCount"; */

const ItemList = ({ productos }) => {
  /* function onAdd(cant) {
    console.log(`Has agregado ${cant} productos al carrito`);
  } */

  return (
    <>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Item
            image={producto.img}
            title={producto.name}
            price={producto.price}
            description={producto.description}
            btnStyle={"btn btn-dark"}
            btnText={"Añadir al carrito"}
            id={producto.id}
          />
        ))
      ) : (
        <div className="spinner-grow" style={{width: "4rem", height: "4rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default ItemList;
