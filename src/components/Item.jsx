import React from "react";
import { Link } from "react-router-dom";

const Item = ({title, color, price, description, image, id}) => {
  return (
    <div className={`card ${color}`} style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">
          Precio: {price} CLP
        </p>
        <p className="card-text">
          {description}
        </p>
        <Link className="btn btn-dark mt-2 w-100" to={`/item-detail/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
