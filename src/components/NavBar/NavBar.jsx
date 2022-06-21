import { NavLink } from '../NavLink/NavLink';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
const NavBar = ()=>{



    return(
        <div className="menu-ecommerce">
            <nav>
                <ul>
                    <NavLink title="Inicio"/>
                    <NavLink title="Productos"/>
                    <NavLink title="Servicios"/>
                    <NavLink title="Contacto"/>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;