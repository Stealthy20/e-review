import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand>E-Reviews</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              to="saved"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-floppy-disk"></i>Saved
            </NavLink>
            <NavLink
              to="signin"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink
              to="signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
