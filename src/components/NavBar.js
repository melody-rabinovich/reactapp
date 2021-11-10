import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import "../css/navBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContextUse } from "../context/CartContext"

 
function NavBar() {
  const { cartProducts } = CartContextUse();

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} width="140" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ms-auto">
            <Link to="/" className="me-3 nav-link">
              Inicio{" "}
            </Link>
            <Link to="/category/taylor" className="me-3 nav-link">
              Guitarras Taylor
            </Link>
            <Link to="/category/martin" className="me-3 nav-link">
              Guitarras Martin & Co
            </Link>
            <Link to="/category/gibson" className="me-3 nav-link">
              Guitarras Gibson
            </Link>
            <Link to="/category/fender" className="me-3 nav-link">
              Guitarras Fender
            </Link>
            <Link to="/cart" className="nav-link active">
              <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;