import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="ligth" className="navbar">
            <Container className="container-navbar">
                <Navbar.Brand to="/">BettyStore💎</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="enlaces">Home</Link>
                        <Link to="/productos" className="enlaces">Productos</Link>
                        <Link to="/contacto" className="enlaces">Contacto</Link>
                        <NavDropdown title="Categorias" className="enlacesDes" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link className= "enlaces" to="/category/productos A">Productos A</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className= "enlaces" to="/category/productos B">Productos B</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className= "enlaces" to="/category/productos C">Productos C</Link></NavDropdown.Item>  
                        </NavDropdown>
                    </Nav>
                    {/*<CartWidget/>*/}
                </Navbar.Collapse>
                <CartWidget/> 
            </Container>
        </Navbar>
       
        
    );
}

export default NavBar;
