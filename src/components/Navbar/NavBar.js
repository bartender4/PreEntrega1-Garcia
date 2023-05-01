import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
      
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Recopados</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gaseosas</Nav.Link>
            <Nav.Link href="#features">Cervezas</Nav.Link>
            <Nav.Link href="#pricing">Vinos</Nav.Link>
            <Nav.Link href="#pricing">Aperitivos</Nav.Link>
            <Nav.Link href="#pricing">Promos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
    </Navbar>

   

    


    
    )

}


export default NavBar