import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hotel  <span className="text-danger fw-bold">X</span>-<span className="text-info fw-bold">CROSS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="text-decoration-none me-4 text-info fw-bold" to="/">Home</Link>
            <Link className="text-decoration-none me-4 text-info fw-bold" to="/booking">Booking</Link>
            <Link className="text-decoration-none me-4 text-info fw-bold" to="/login">Login</Link>
            <Link className="text-decoration-none me-4 text-info fw-bold" to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
