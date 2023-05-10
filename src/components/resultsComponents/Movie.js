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

  // WHEN COMPONENT MOUNTS, SET STATE VALUES
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
		<Container
			className='p-3 mt-5 rounded'
			style={{
				backgroundColor: 'rgba(255, 255, 255, .5)',
				backdropFilter: 'blur(10px)',
			}}>
			<Container>
				<h5>
					<em>Results </em>
				</h5>
				<h1 className='title mb-5 text-center'>{results.title}</h1>
			</Container>

			{/* TRAILER OR POSTER IMAGE */}

			<Container>
				{youtubeURL ? (
					<Trailer results={results} youtubeURL={youtubeURL} />
				) : (
					<PosterImage posterUrl={posterUrl} />
				)}
			</Container>

			{/* STREAMING PLATFORMS */}

			<Container className='my-5' fluid>
				<h6>
					<em>Streaming Platform(s):</em>
				</h6>

				{platformNames !== '' ? (
					<Container className='d-flex flex-row my-5' fluid>
						{platformNames.map((platform, key = platform) => {
							return (
								<Platform
									platformObject={platformObject[platform]}
									platformName={platform}
								/>
							);
						})}
					</Container>
				) : (
					<Container>
						<NoStreamingPlatforms />
					</Container>
				)}
			</Container>
		</Container>
	);
}

export default Movie;
