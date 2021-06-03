import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap";
import "./style.css";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="brand" href="/">Syntup Admin</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/categories">Categories</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/signin">Signin</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
    </Nav>
    
  </Navbar>
    )
}

export default Header
