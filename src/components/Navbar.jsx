//el codigo 'rafce' se genera un componente nuevo
import React from 'react'
import CartWidget from './CartWidget'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Have Fun</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda">Tienda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contáctanos</Link>
            </li>
          </ul>
          <form className="d-flex me-5">
            <input className="form-control me-2" type="search" placeholder="¿Qué deseas buscar?" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
          <CartWidget/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar