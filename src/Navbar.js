import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaUser, FaShoppingCart } from 'react-icons/fa';


function EcommerceNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Group-3 shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Nav>
          <Nav>
            <Nav.Link href="/account"><FaUser /> Account</Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcommerceNavbar;
