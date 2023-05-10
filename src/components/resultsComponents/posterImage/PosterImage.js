import React from 'react';
import { Container } from 'react-bootstrap';
import NoPosterImage from './NoPosterImage';

function PosterImage({posterUrl}) {
  return (
		<Container
			style={{ overflow: 'hidden'}}
			className='ratio ratio-16x9'>
			{posterUrl ?
				<img src={posterUrl} alt={posterUrl}/>
				:
				<NoPosterImage />
			}
		</Container>
	);
}

export default PosterImage;
