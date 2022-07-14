import Logo from '../../img/galantry_man.png'
import Barrita from '../../img/Barrita_Relan.png'
import {Link} from "react-router-dom"

const Footer = () =>{

    return (
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h1 class="logo me-auto">
                                <Link to="/Home" class="logo me-auto">
                                    <img src={Logo} alt="logo galantry man" class="img-fluid" />
                                </Link>
                            </h1>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Links Utiles</h4>
                            <ul>
                                <li>
                                    <img src={Barrita} alt="Barrita" />
                                    <Link to="/Faq">Preguntas Frecuentes</Link>
                                </li>
                                <li>
                                    <img src={Barrita} alt="Barrita" />
                                    <Link to="/Contacto">Atención al Cliente</Link>
                                </li>
                                <li>
                                    <img src={Barrita} alt="Barrita" />
                                    <Link to="/Enviosydevoluciones">Envíos y Devoluciones</Link>
                                </li>
                                <li>
                                    <img src={Barrita} alt="Barrita" />
                                    <Link to="/Terminosycondiciones">Terminos y Condiciones</Link>
                                </li>
                                <li>
                                    <img src={Barrita} alt="Barrita" />
                                    <Link to="/">Mapa del Sitio</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Contacto</h4>
                            <ul>
                                <li>
                                    <a class="direccion" href="https://goo.gl/maps/GNA6hGmmw6QDPy4R7" target="_blank">
                                        <i class="bi bi-geo-fill"></i>Av. Directorio 7235
                                    </a>
                                </li>
                                <li>
                                    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=05400000000" target="_blank">
                                        <i class="bi bi-whatsapp"></i>11 5409-0544
                                    </a>
                                </li>
                                <li>
                                    <a class="email" href="mailto:info@galantry.com.pe" target="_blank">
                                        <i class="bi bi-envelope-fill"></i>info@galantry.com.pe
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Suscribite a nuestro Newsletter</h4>
                            <p>Conocé todas nuestras promos y novedades!</p>
                            <form action="" method="post">
                                <input type="email" name="email" id="emailNewsletter" />
                                <input type="submit" value="Subscribite" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container d-md-flex py-4">
                <div class="me-md-auto text-center text-md-start">
                    <div class="copyright">
                        &copy;
                        <strong>
                            <span>Galantry Man</span>
                        </strong>
                        . Todos los derechos reservados. Diseñado y desarrollado por <a href="#">Leonardo Rivas</a>
                    </div>
                </div>

                <div class="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://facebook.com/xxxxxxxxx" class="facebook">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/xxxxxxxxx" class="instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                </div>
                <div id="BackToTop"></div>
                <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-up-short"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer