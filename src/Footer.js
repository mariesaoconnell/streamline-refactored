import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
function Footer(props) {
  return (
    <Container fluid>
      <Navbar fixed='bottom' bg='light' className='d-flex justify-content-center'>
        <Navbar.Brand>Footer</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Footer;
