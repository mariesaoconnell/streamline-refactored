import React, { useState } from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Search() {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');

	function handleChange(event){
		setTitle(event.target.value)
	}

	function handleSubmit(event){

		event.preventDefault();
		navigate(`/results/${title.toLowerCase()}`)
	}

  return (
		<>
			<Container id="main-search" className='my-2'>
				<Form onSubmit={handleSubmit}>
					<Row className='d-flex'>
						<Col className='m-2' xs={8} md={10}>
							<FloatingLabel controlId='floatingInput' label='Search a Show'>
								<Form.Control
									type='text'
									placeholder='show title'
									value={title}
									onChange={handleChange}
								/>
							</FloatingLabel>
						</Col>
						<Col className='my-auto d-flex p-0' xs={1} md={1}>
							<Button className='btn-lg' type='submit'>Search</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		</>
	);
}

export default Search;
