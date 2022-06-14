import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav">
            <div className="container-logo">
                <h1>De Ascentiis CODERHOUSE</h1>
            </div>

            <ul className="list">
                <li className="list__item list__item-click">
                    <a className="nav__link" href="#1">
                        Marcas
                    </a>
                </li>

                <li className="list__item">
                    <a className="nav__link" href="#1">
                        Hombre
                    </a>
                </li>

                <li className="list__item list__item-click">
                    <a className="nav__link" href="#1">
                        Mujer
                    </a>
                </li>

                <li className="list__item">
                    <a className="nav__link" href="#1">
                        Ofertas
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;