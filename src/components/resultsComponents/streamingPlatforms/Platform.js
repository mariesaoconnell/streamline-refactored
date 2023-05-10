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
    <Container className='text-center'>
      <h5>
        {url ?
          (
            <a
              href={url}
              rel='noreferrer'
              target='_blank'
              style={{textDecoration:'none'}}
            >
            {platformName}
            </a>
          ) : (<p>{platformName}</p>)
        }
      </h5>
    </Container>
	);
}

export default Platform;
