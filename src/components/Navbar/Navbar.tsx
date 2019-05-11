import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const ServerInfoNavbar = () => {
  return (
    <Navbar collapseOnSelect={true} expand="lg" bg="light" variant="light">
      <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Server info</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href={`${process.env.PUBLIC_URL}/`}>Параметры сервера</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/settings`}>Настройки</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="http://fosemberg2.beget.tech/register/">Регистрация</Nav.Link>
          <Nav.Link href="http://fosemberg2.beget.tech/wp-login.php">Войти</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ServerInfoNavbar;