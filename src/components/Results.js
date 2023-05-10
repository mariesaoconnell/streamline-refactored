import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Series from './resultsComponents/Series';
import Movie from './resultsComponents/Movie';

function Results({title}) {
  const [results, setResults] = useState(null);

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

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchResults();
  }, [])

  if(!results) return null;

	return (
		<>
			{results.type === 'series' ? <Series results={results}/> : <Movie results={results}/>}
		</>
	);
}

export default Results;
