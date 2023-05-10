import React from 'react';
import { Container } from 'react-bootstrap';

function Trailer({results, youtubeURL}) {
  return (
		<Container className='d-flex embed-responsive ratio ratio-16x9' fluid>
			<iframe
				title={`${results.title} YouTube Video`}
				className='embed-responsive-item'
				src={youtubeURL}
				allowFullScreen
			/>

			{/* IF NO VIDEO, SHOW POSTERS */}
		</Container>
	);
}

export default Trailer;
