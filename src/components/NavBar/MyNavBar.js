import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import "../../style/NavBar.css";

const MyNavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={colorChange ? "navbarEx colorChange" : "navbarEx"}
      >
        {/* <Navbar.Brand className="myBrand" href="/"> */}
        <Navbar.Brand className="myBrand" href="#inicio">
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#sobremi">Sobre mí</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#recursos">Conocimientos</Nav.Link>
            <Nav.Link className="lastNav" eventKey={2} href="#contactame">
              Contáctame
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="inicio"></div>
    </>
  );
};

export default MyNavBar;
