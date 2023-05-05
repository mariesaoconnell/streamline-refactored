import React from 'react';
import { Container, Image } from 'react-bootstrap';
import NoPosterImage from './NoPosterImage';

function PosterImage({posterUrl}) {
  return (
		<Container
			style={{ overflow: 'hidden' }}
			className='ratio ratio-16x9'>
			{posterUrl ?
				<Image alt={posterUrl} src={posterUrl} /> :
				<NoPosterImage />
			}
		</Container>
	);
}

export default PosterImage;
