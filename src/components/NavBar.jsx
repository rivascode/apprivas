import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar
      className="shadow p-3 mb-5 bg-white rounded"
      bg="primary"
      expand="lg"
    >
      <Navbar.Brand href="#">InduRepuestos</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#Válculas">Home</Nav.Link>
          <Nav.Link href="#action2">Productos</Nav.Link>
          <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Bombas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Valvulas</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget className="float-right" />
    </Navbar>
  );
}
export default NavBar;
