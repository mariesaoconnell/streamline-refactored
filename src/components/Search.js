import React, { useState } from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import Results from './Results';

function Search() {

	let [title, setTitle] = useState('');
	let [submitted, setSubmitted] = useState(false);

	function handleChange(event){
		setTitle(event.target.value)
		setSubmitted(false)
	}

	function handleSubmit(event){
		setSubmitted(true)
		event.preventDefault();
	}

  return (
		<>
			<Container id="main-search" className='my-5'>
				<Form onSubmit={handleSubmit}>
					<Row className='d-flex justify-content-center'>
						<Col xs={8}>
							<FloatingLabel controlId='floatingInput' label='Search a Show'>
								<Form.Control
									type='text'
									placeholder='show title'
									value={title}
									onChange={handleChange}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={1}>
							<Button type='submit'>Search</Button>
						</Col>
					</Row>
				</Form>
			</Container>
			<Container>
				{submitted === true ? <Results title={title} /> : null}
			</Container>
		</>
	);
}

export default Search;
