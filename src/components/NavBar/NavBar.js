import Logo from '../../img/galantry_man.png'
import UserIcon from '../User/User.js'
import {Navbar, Nav} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom"
import '../estilos.css'


const NavBar = () =>{

  return(
  <>
   <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
  
        <Navbar.Brand as={Link} to="/Home"><h1><img src={Logo} alt="logo galantry man" class="img-fluid"/></h1></Navbar.Brand>
                
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        
          <Navbar.Collapse id="navbar" class="navbar order-last order-lg-0">
         
          <ul>
            <Nav class="dropdown">
              <Link to="/tienda" scrollto active><span>Tienda</span> <i class="bi bi-chevron-down"></i></Link>
                <ul>
                  <Nav className="m-auto">
                    <Link to="/categoria/Bermudas">Bermudas</Link>
                    <Link to="/categoria/Buzos">Buzos</Link>
                      <li class="dropdown">
                        <Link to="/categoria/Camisas"><span>Camisas</span> <i class="bi bi-chevron-right"></i></Link>
                          <ul>
                            <Link to="/categoria/Camisas/MangaCorta">Manga Corta</Link>
                            <Link to="/categoria/Camisas/MangaLarga">Manga Larga</Link>
                          </ul>
                      </li>
                    <Link to="/categoria/Camperas">Camperas</Link>
                    <Link to="/categoria/Remeras">Remeras</Link>
                      <li class="dropdown">
                        <Link to="/categoria/Pantalones"><span>Pantalones</span> <i class="bi bi-chevron-right"></i></Link>
                          <ul>
                            <Link to="/categoria/Pantalones/Denim">Denim</Link>
                            <Link to="/categoria/Pantalones/Gabardina">Gabardina</Link>
                            <Link to="/categoria/Pantalones/Joggin">Joggin</Link>
                          </ul>
                      </li>
                    <Link to="/categoria/SaldosTemporadasAnteriores">Temporadas Anteriores</Link>
                  </Nav>
                </ul>
          </Nav>
              <Link to="/catalogo">Catalogo</Link>
              <Link to="/contacto">Contacto</Link>
              <Link to="/mayoristas">Mayoristas</Link>
              
              <UserIcon />
              <CartWidget /> 

            <form id="Buscadorr" class="d-flex">  
              <input id="Buscador" class="form-control" type="search" placeholder="Buscador" aria-label="Search"/>
              <button id="btnBuscador" class="glty-bttn-outline glty-bttn-outline-terceary" type="submit">Buscar</button>
            </form>
        </ul> 

          <i class="bi bi-list mobile-nav-toggle"></i>

    </Navbar.Collapse>
   </div>
</header>
  </>
)
  }
export default NavBar