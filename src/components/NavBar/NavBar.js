import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">BettyShop💎</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Productos 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Productos 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Productos 3</NavDropdown.Item>  
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
