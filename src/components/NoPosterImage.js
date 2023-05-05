import React from 'react';
import { Container } from 'react-bootstrap';

function NoPosterImage(props) {
  return (
    <Container className='text-center my-auto'>
      <h2>No Poster or Trailer Found <br/> 😢</h2>
    </Container>
  );
}

export default NoPosterImage;
