import React from 'react';
import {Container, Image} from 'react-bootstrap'
import Cover from '../assets/images/streamline-cover.svg'


function Layout({ children }) {
  return (
    <Container>
      <Container className='d-flex justify-content-center py-3'>
      <Image id='cover' src={Cover} />
      </Container>
      <Container>
        {children}
      </Container>
    </Container>
  );
}

export default Layout;
