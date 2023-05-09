import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs} from 'react-bootstrap';
import PosterImage from './posterImage/PosterImage';
import Platform from './streamingPlatforms/Platform';
import NoStreamingPlatforms from './streamingPlatforms/NoStreamingPlatforms';

function Series({results}) {
  const [key, setKey] = useState('Season 1');
  const [seasons, setSeasons] = useState([]);

  useEffect(()=>{
    setSeasons(results.seasons)
  }, [])


  return (
		<Container
			className='p-3 mt-5 rounded'
			style={{
				backgroundColor: 'rgba(255, 255, 255, .5)',
				backdropFilter: 'blur(10px)',
			}}
			fluid>
			<h3>
				<em>Results:</em>
			</h3>
			{results && (
				<Container fluid>
					<h1>{results.title}</h1>

					<Tabs
						className='d-flex justify-content-center'
						defaultActiveKey={key}
						onSelect={(k) => setKey(k)}>
						{/* ITERATE OVER SEASONS */}
						{seasons.map((season, key = { season }) => {
							let youtubeURL = null;
							let platformObject = [];
							let platformNames = '';
							let posterUrl = '';

							{
								/* UPDATE STREAMING OBJECT AND NAMES VARIABLES */
							}
							if (season.streamingInfo.us) {
								platformObject.push(season.streamingInfo.us);
								platformNames = Object.keys(season.streamingInfo.us);
							}

							{
								/* UPDATE POSTER URLS VARIABLE */
							}

							posterUrl = season.posterURLs.original;

							{
								/* CHECK IF THERE IS A YT ID... IF NOT VARIABLE WILL NOT BE UPDATED WITH URL */
							}
							if (season.youtubeTrailerVideoId !== '')
								youtubeURL = `https://www.youtube.com/embed/${season.youtubeTrailerVideoId}`;

							return (
								<Tab className='' eventKey={season.title} title={season.title}>
									{/* VIDEO */}
									{youtubeURL !== null ? (
										<Container
											className='d-flex embed-responsive ratio ratio-16x9'
											fluid>
											<iframe
												title={`${results.title} YouTube Video`}
												className='embed-responsive-item'
												src={youtubeURL}
												allowFullScreen
											/>

											{/* IF NO VIDEO, SHOW POSTERS */}
										</Container>
									) : (
										<Container>
											<PosterImage posterUrl={posterUrl} />
										</Container>
									)}

									{/* STREAMING PLATFORMS */}
									<Container className='my-5' fluid>
										<h6>Streaming Platform(s):</h6>
										{platformNames !== '' ? (
											<Container className='d-flex flex-row' fluid>
												{platformNames.map((platform, key = { platform }) => {
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
								</Tab>
							);
						})}
					</Tabs>
				</Container>
			)}
		</Container>
	);
}

export default Series;
