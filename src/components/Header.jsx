import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
   <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-solid fa-film me-2 text-white"></i> <Link  style={{textDecoration:'none',color:'white'}}  to="/">CritiCine</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><Link  style={{textDecoration:'none'}}  to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:'none'}} to='/watchlater'>Watchlater</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header