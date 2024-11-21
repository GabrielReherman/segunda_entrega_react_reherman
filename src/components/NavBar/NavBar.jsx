import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar">
          <img className="icon-navbar" src="/img/logo.png" alt="Logo" />
        </Link>
        <Link to="/" className="navbar">
        <BootstrapNavbar.Brand href="#home">Inicio</BootstrapNavbar.Brand>
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category/mouse" className="nav-link">
              Mouse
            </Link>
            <Link to="/category/teclado" className="nav-link">
              Teclados
            </Link>
            <Link to="/category/audio" className="nav-link">
              Audio
            </Link>
            <NavDropdown title="Más Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/motherboard">
                Motherboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/ram">
                Memoria RAM
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/psu">
                Fuentes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
        <CartWidget />
      </Container>
    </BootstrapNavbar>
  );
};

export default NavBar;
