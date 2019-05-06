import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const ServerInfoNavbar = () => {
  return (
    <Navbar collapseOnSelect={true} expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Server info</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Параметры сервера</Nav.Link>
          <Nav.Link href="/settings">Настройки</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Войти</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ServerInfoNavbar;