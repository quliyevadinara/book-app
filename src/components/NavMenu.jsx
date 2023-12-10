import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand" href="#home">E-Book</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" > 
            <Nav className="me-auto justify-content-end">
              <Link to="/" className="nav-link" href="#home">Home</Link >
              <Link to="/books" className="nav-link" href="#link">Books</Link >
              <Link to="/about" className="nav-link" href="#link">About</Link >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
