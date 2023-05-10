import React from 'react';
import { Container } from 'react-bootstrap';

function NoPosterImage(props) {
  return (
    <Container className='d-flex justify-content-center text-center my-auto' fluid>
      <h2 className='my-auto title'>No Poster or Trailer Found <br/> 😢</h2>
    </Container>
  );
}

export default NoPosterImage;
