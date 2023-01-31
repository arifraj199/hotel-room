import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContexts/UserContexts";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Hotel <span className="text-danger fw-bold">X</span>-
          <span className="text-info fw-bold">CROSS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="text-decoration-none me-4 text-info fw-bold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none me-4 text-info fw-bold"
              to="/booking"
            >
              Booking
            </Link>
            {user?.email ? (
              <Button onClick={handleLogout} variant="danger">
                SignOut
              </Button>
            ) : (
              <div>
                <Link
                  className="text-decoration-none me-4 text-info fw-bold"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-decoration-none me-4 text-info fw-bold"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
