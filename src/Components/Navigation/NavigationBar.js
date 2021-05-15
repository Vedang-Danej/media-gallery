import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavigationBar = () => {
  const [curNav, setCurNav] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const url = window.location.href.split("/");
    const cur = url[url.length - 1];
    setCurNav(cur);
  }, []);

  const handleLinkClick = (link) => {
    setCurNav(link);
  };

  const onCLickToggle = () => {
    // eslint-disable-next-line
    const curToggle = toggle;
    setToggle(!toggle);
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      collapseOnSelect={true}
      className="nav_bar"
    >
      <LinkContainer to="/" onClick={() => handleLinkClick(null)}>
        <Navbar.Brand style={{ margin: "0 5px" }}>
          <i className="fas fa-photo-video logo_main">
            <span className="logo_text"> Media Gallery</span>
          </i>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ margin: "0 5px" }}
        onClick={onCLickToggle}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <LinkContainer
            className="link_container"
            to="/animals"
            onClick={() => handleLinkClick("animals")}
          >
            <Nav.Link className={curNav === "animals" ? "nav_active" : null}>
              <span className="nav_link"> Animals</span>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer
            className="link_container"
            to="/family"
            onClick={() => handleLinkClick("family")}
          >
            <Nav.Link className={curNav === "family" ? "nav_active" : null}>
              <span className="nav_link"> Family</span>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer
            className="link_container"
            to="/friends"
            onClick={() => handleLinkClick("friends")}
          >
            <Nav.Link className={curNav === "friends" ? "nav_active" : null}>
              <span className="nav_link"> Friends</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
