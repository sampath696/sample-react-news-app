import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";
// import BusinessIcon from '@material-ui/icons/Business';

const NavbarContainer = () => {
  return (
    <div className="navbarContainer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          All
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Business" className="nav-link">
              Business
            </Link>
            <Link to="/Entertainment" className="nav-link">
              Entertainment
            </Link>
            <Link to="/Health" className="nav-link">
              Health
            </Link>
            <Link to="/Science" className="nav-link">
              Science
            </Link>
            <Link to="/Sports" className="nav-link">
              Sports
            </Link>
            <Link to="/Technology" className="nav-link">
              Technology
            </Link>
          </Nav>
          <Nav className="head">
            <Link to="/" className="nav-link">
              beWaKooF neWs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;
