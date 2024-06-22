import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap'; // Assuming you are using React Bootstrap for the Navbar component

const Navigation = ({ numberOfNotifications }) => {
  const navbarStyle = {
    borderBottom: '3px solid #5c5c5c'
  };

  const navbarBrandStyle = {
    fontSize: '1.5rem'
  };

  const navLinkStyle = {
    fontSize: '1.1rem',
    marginLeft: '1rem'
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={navbarStyle}>
      <Navbar.Brand href="/home" style={navbarBrandStyle}>Game Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav>
          <Nav.Link href="/home" style={navLinkStyle}>Home</Nav.Link>
          <Nav.Link href="#games" style={navLinkStyle}>Games</Nav.Link>
          <Nav.Link href="#about" style={navLinkStyle}>About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile" style={navLinkStyle}>Hi, Game User</Nav.Link>
          <Nav.Link href="#notifications" style={navLinkStyle}>
            Msg
            <Badge pill variant="light" className="ml-1">{numberOfNotifications}</Badge>
          </Nav.Link>
          <Nav.Link href="../" style={navLinkStyle}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
