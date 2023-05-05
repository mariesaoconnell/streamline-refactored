import React from 'react';
import { Container } from 'react-bootstrap';

function NoStreamingPlatforms(props) {
  return (
    <Container className='d-flex flex-column text-center m-5'>
      <h2>No Streaming Platforms Found</h2>
      <br />
      😢
    </Container>
  );
}

export default NoStreamingPlatforms;
