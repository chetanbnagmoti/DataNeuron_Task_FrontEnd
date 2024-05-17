import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">DataNeuron</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/task-1">Task-1</Nav.Link>
            <Nav.Link as={Link} to="/task-2">Task-2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header