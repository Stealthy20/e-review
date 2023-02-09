import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>E-Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link><i className="fas fa-home"></i>Feed</Nav.Link>
            <Nav.Link><i className="fas fa-floppy-disk"></i>Saved</Nav.Link>
            <Nav.Link><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
            <Nav.Link><i className="fas fa-user-plus"></i>Sign Up</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>Tv</NavDropdown.Item>
              <NavDropdown.Item>Mobile Phone</NavDropdown.Item>
              <NavDropdown.Item>Tablet</NavDropdown.Item>
              <NavDropdown.Item>Tv Accessories</NavDropdown.Item>
              <NavDropdown.Item>Mobile Phone Accessories</NavDropdown.Item>
              <NavDropdown.Item>Tablet Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
