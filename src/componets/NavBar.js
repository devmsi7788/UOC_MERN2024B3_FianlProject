import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap'; // Assuming you are using React Bootstrap for the Navbar component

const Navigation = ({ numberOfNotifications }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="/home">Game Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#games">Games</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">Hi, Game User</Nav.Link>
          <Nav.Link href="#notifications">
            Msg
            <Badge pill variant="light" className="ml-1">{numberOfNotifications}</Badge>
          </Nav.Link>
          <Nav.Link href="../">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
