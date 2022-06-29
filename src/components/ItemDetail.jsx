import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({productos}) => {
  return (
    <>
      <div className="container">
        <div className="row container-main py-5">
          <div className="col-md-7 main">
            <h2 className='mb-3'>{productos.name}</h2>
            <h4>Precio: {productos.price} CLP</h4>
            <h5 className='mb-3'>{productos.description}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              recusandae velit numquam quas cum facere necessitatibus repellat
              laborum optio voluptatibus voluptas saepe, fugiat odio voluptates
              omnis architecto labore vitae officia. Ad sequi libero omnis
              possimus odio maiores et incidunt quia ex perferendis repellat
              quaerat eius architecto aspernatur quam numquam facere sapiente
              nulla blanditiis molestias quibusdam, assumenda, temporibus
              voluptatem eaque! Cupiditate!
            </p>
          </div>
          <div className="col-md-5 aside d-flex flex-column">
            <img src={productos.img} alt={productos.description} width="450" height="450" />
            <div className='w-100 d-flex justify-content-center'>
              <ItemCount 
                stock={productos.stock}
                initial={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
