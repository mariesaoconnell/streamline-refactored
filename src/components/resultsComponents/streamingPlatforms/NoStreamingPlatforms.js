import React from 'react';
import { Container } from 'react-bootstrap';

function NoStreamingPlatforms(props) {
  return (
		<Container className='text-center my-5 justify-content-center '>
			<h2 className='title'>No Streaming Platforms Found</h2>
			<br />
			😢
		</Container>
	);
}

export default NoStreamingPlatforms;
