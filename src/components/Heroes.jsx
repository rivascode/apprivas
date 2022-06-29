import React from "react";
import imgHeroes from '../assets/img/foto_2.jpg'
import { Link } from 'react-router-dom'

const Heroes = () => {
  return (
    <div className="container col-xxl-8 px-4 py-2">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={imgHeroes}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="450"
            height="450"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            NUEVA COLECCIÓN WooZY
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2"
              to="/tienda"
            >
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
