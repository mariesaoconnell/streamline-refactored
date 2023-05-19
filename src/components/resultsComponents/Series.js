import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs, Breadcrumb} from 'react-bootstrap';
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
			{results && (
				<Container fluid>
					<Container>
						<h5>
							<Breadcrumb>
								<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
								<Breadcrumb.Item active>Results</Breadcrumb.Item>
							</Breadcrumb>
						</h5>

						<h1 className='title mb-5 text-center'>{results.title}</h1>
					</Container>

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

							if (season.title === 'Season 1') {
								youtubeURL = `https://www.youtube.com/embed/${results.youtubeTrailerVideoId}`;
							}
							if (season.youtubeTrailerVideoId !== '') {
								youtubeURL = `https://www.youtube.com/embed/${season.youtubeTrailerVideoId}`;
							}

							return (
								<Tab className='' eventKey={season.title} title={season.title}>
									{/* IF YOUTUBE URL SHOW TRAILER, ELSE SHOW POSTER IMAGE */}
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
										</Container>
									) : (
										<Container>
											<PosterImage posterUrl={posterUrl} />
										</Container>
									)}

									{/* STREAMING PLATFORMS */}

									<Container className='my-5' fluid>
										<h6>
											<em>Streaming Platform(s):</em>
										</h6>

										{platformNames !== '' ? (
											<Container className='d-flex flex-row my-5' fluid>
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
											<Container className='d-flex' fluid>
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
