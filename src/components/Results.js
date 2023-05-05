import React, {useEffect, useState} from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import Platform from './Platform';
import PosterImage from './PosterImage';
import NoStreamingPlatforms from './NoStreamingPlatforms';

function Results({title}) {
  const [key, setKey] = useState(null);
  const [results, setResults] = useState(null);
  const [seasons, setSeasons] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await axios.get(
				`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=us`,
				{
          headers: {
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
						'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
					},
          params: {title: {title}, country: 'us'},
				}
			);
      setResults(res.data.result[0]);
      setSeasons(res.data.result[0].seasons)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchResults();
    setKey('Season 1')

  }, [])

  if(!results) return null;

  return (
    <Container>
			<h2>Results</h2>
      {results &&
        <Container>
          <h1>{results.title}</h1>

          <Tabs
            defaultActiveKey={key}
            onSelect={(k)=>setKey(k)}
          >

          {/* ITERATE OVER SEASONS */}
          {seasons.map((season, key={season})=>{
            let youtubeURL = null
            let platformObject = []
            let platformNames = ''
            let posterUrl = ''

            {/* UPDATE STREAMING OBJECT AND NAMES VARIABLES */}
            if(season.streamingInfo.us){
              platformObject.push(season.streamingInfo.us)
              platformNames = Object.keys(season.streamingInfo.us)
            }

            {/* UPDATE POSTER URLS VARIABLE */}

            posterUrl = season.posterURLs.original


            {/* CHECK IF THERE IS A YT ID... IF NOT VARIABLE WILL NOT BE UPDATED WITH URL */}
            if(season.youtubeTrailerVideoId !== '') youtubeURL = `https://www.youtube.com/embed/${season.youtubeTrailerVideoId}`

            return (
							<Tab eventKey={season.title} title={season.title}>
								{/* VIDEO */}
                {youtubeURL !== null ?
                  (<Container
                    className='d-flex embed-responsive ratio ratio-16x9'
                    fluid>
                    <iframe
                      title={`${results.title} YouTube Video`}
                      className='embed-responsive-item'
                      src={youtubeURL}
                      allowFullScreen
                    />

                    {/* IF NO VIDEO, SHOW POSTERS */}
                  </Container>) :
                  (<Container>
                    <PosterImage posterUrl={posterUrl} />
                  </Container>)
                }

								{/* STREAMING PLATFORMS */}
								<Container className='d-flex flex-column justify-content-center my-5'>
                  <h3>Streaming Platform(s):</h3>
									{platformNames !== '' ? (
										<Container className='d-flex justify-content-center my-3'>
											{platformNames.map((platform, key=platform) => {
												return (
													<Platform
                            platformObject={platformObject[0][platform]}
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

								{/* ACCORDION */}
							</Tab>
						);
          })}
          </Tabs>
        </Container>
      }
		</Container>
	);
}

export default Results;
