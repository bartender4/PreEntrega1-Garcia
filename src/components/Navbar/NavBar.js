import { NavLink } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      
    <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={'/'} className="navbar-brand">RECOPADOS</Link>
          <Nav className="me-auto">
            <NavLink as={Link} to={`/category/Cervezas`} >Cervezas</NavLink>
            <NavLink as={Link} to={`/category/Vinos`} >Vinos</NavLink>
            <NavLink as={Link} to={`/category/Aperitivos`} >Aperitivos</NavLink>
            <NavLink as={Link} to={`/category/Gaseosas`} >Gaseosas</NavLink>
            <NavLink as={Link} to={`/category/Promos`} >Promos</NavLink>
          </Nav>
          <CartWidget />
        </Container>
    </Navbar>

   

    


    
    )

}


export default NavBar