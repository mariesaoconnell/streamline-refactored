import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap'
import PosterImage from './posterImage/PosterImage';
import NoPosterImage from './posterImage/NoPosterImage';
import Trailer from './trailer/Trailer';
import NoTrailer from './trailer/NoTrailer'

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

  
  return (
    <Container>
      <h1>{results.title}</h1>

      {youtubeURL ?
        <Trailer /> :
        <NoTrailer />
      }

    </Container>
  );
}

export default Movie;
