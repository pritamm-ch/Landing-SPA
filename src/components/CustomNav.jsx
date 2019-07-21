import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './CustomNav.css';
class CustomNav extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar className="main-nav">
  <Navbar.Brand href="#home"><h1>LOGO</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Button 1</Nav.Link>
      <Nav.Link href="#link">Button 2</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search our content" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <NavDropdown title="Language" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">German</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Default</NavDropdown.Item>
      </NavDropdown>
      <Nav className="sign">
      <Nav.Link href="#home">Sign in</Nav.Link>
      <Button variant="success">Register</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default CustomNav;