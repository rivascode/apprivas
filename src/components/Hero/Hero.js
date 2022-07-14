import Carousel1 from '../../img/portada3_900x350.jpg';
import Carousel2 from '../../img/portada2_900x350.jpg';
import Carousel3 from '../../img/portada4_900x350.jpg';
import Carousel4 from '../../img/portada1_900x350.jpg';
import {Link} from "react-router-dom"
import { Carousel } from "react-bootstrap"

const Hero = () =>{

  return (
    <div class="container">

        <div class="row mt-5">
      
          {/* Nav Lateral de la Tienda */}
          <div class="col-lg-3 mt-5">
      
            <h1>Tienda</h1>
            <div class="list-group mt-4">
              <Link to="/categoria/Bermudas" class="list-group-item">Bermudas</Link>
              <Link to="/categoria/Buzos" class="list-group-item">Buzos</Link>
              <Link to="/categoria/Camisas" class="list-group-item">Camisas</Link>
              <Link to="/categoria/Camperas" class="list-group-item">Camperas</Link>
              <Link to="/categoria/Remeras" class="list-group-item">Remeras</Link>
              <Link to="/categoria/Pantalones" class="list-group-item">Pantalones</Link>
              <Link to="/categoria/Saldos Temporadas Anteriores" class="list-group-item">Saldos Temporadas Anteriores</Link>
            </div>
      
          </div> 
      
          <div class="col-lg-9 mt-5">
            <div id="mainSlider" class="carousel slide mt-4" data-bs-ride="carousel">
              <div class="carousel-inner">
              <Carousel>
                <Carousel.Item active>
                  <img className="d-block w-100" src={Carousel1} alt="Primera imagen aleatoria galantry" />
                </Carousel.Item>
                
                <Carousel.Item>
                  <img className="d-block w-100" src={Carousel2} alt="Segunda imagen aleatoria galantry" />
                </Carousel.Item>
                
                <Carousel.Item>
                  <img className="d-block w-100" src={Carousel3} alt="Tercera imagen aleatoria galantry"/>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={Carousel4} alt="Cuarta imagen aleatoria galantry" />
                </Carousel.Item>
              </Carousel>
              </div> 
            </div> 
        </div> 
      
      </div>
    </div>
    )
  }
  export default Hero