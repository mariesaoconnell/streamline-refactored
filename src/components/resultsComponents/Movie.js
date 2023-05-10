import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap'
import PosterImage from './posterImage/PosterImage';
import Trailer from './trailer/Trailer';
import NoStreamingPlatforms from './streamingPlatforms/NoStreamingPlatforms';
import Platform from './streamingPlatforms/Platform';


function Movie({results}) {
  const [youtubeURL, setYoutubeURL] = useState(null)
  const [platformObject, setPlatformObject] = useState([])
  const [platformNames, setPlatformNames] = useState('')
  const [posterUrl, setPosterUrl] = useState('')

  useEffect(()=>{
    if(results.posterURLs.original) setPosterUrl(results.posterURLs.original)
    if(results.streamingInfo.us) {
      setPlatformObject(results.streamingInfo.us)
      setPlatformNames(Object.keys(results.streamingInfo.us))
    }
    if(results.youtubeTrailerVideoId !== ''){
      setYoutubeURL(
				`https://www.youtube.com/embed/${results.youtubeTrailerVideoId}`
			);
    }
  }, [])

  console.log(platformNames, platformObject)

  return (
    <Container>
      <h1>{results.title}</h1>

      {/* TRAILER OR POSTER IMAGE */}

      <Container>
        {youtubeURL ?
          <Trailer results={results} youtubeURL={youtubeURL}/> :
          <PosterImage posterUrl={posterUrl}/>
        }
      </Container>

      {/* STREAMING PLATFORMS */}

      {/* <Container>
        {platformNames !== '' ?
          platformNames.map((platform, key = platform)=>{
            return(
              <Platform />
            )
          }) :
          <NoStreamingPlatforms />
        }
      </Container> */}

    </Container>
  );
}

export default Movie;
