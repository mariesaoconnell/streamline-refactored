import React from 'react';
import { Container } from 'react-bootstrap';

function Platform({platformObject, platformName}) {
  let url = ''

  if (platformObject[0].watchLink) {
		url = platformObject[0].watchLink;
	} else if(platformObject[0].link) {
		url = platformObject[0].link;
	} else {
    url = null
  }

  return (
    <Container className=''>
      {url ?
        (<a href={url} target='_blank'>
          {platformName}
        </a>) : (<p>{platformName}</p>)
      }
    </Container>
	);
}

export default Platform;
