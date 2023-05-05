import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
function Footer(props) {
  return (
    <Container className="p-0" fluid>
      <Navbar sticky='bottom' bg='light' className='d-flex justify-content-center'>
        <Navbar.Brand>Footer</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Footer;
