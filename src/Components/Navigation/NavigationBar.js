import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      collapseOnSelect={true}
      className="nav_bar"
    >
      <Navbar.Brand as={Link} to="/">
        <i className="fas fa-photo-video logo_main">
          <span className="logo_text"> Media Gallery</span>
        </i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/animals" activeClassName="nav_active">
            <span className="nav_link"> Animals</span>
          </Nav.Link>

          <Nav.Link as={NavLink} to="/family" activeClassName="nav_active">
            <span className="nav_link"> Family</span>
          </Nav.Link>

          <Nav.Link as={NavLink} to="/friends" activeClassName="nav_active">
            <span className="nav_link"> Friends</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
