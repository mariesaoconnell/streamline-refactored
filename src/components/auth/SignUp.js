import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// NEED TO SET UP VALIDATION TO DETERMINE IF EMAILS MATCH AND PASSWORDS MATCH 

function SignUp({setLogin}) {

  const [validated, setValidated] = useState(false);
  const [state, setState ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    // POST REQUEST TO SIGN UP
  }

  return (
		<>
			<h1>Sign Up</h1>

			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Row className='d-flex justify-content-center'>
					<Form.Group as={Col} md='4'>
						<Form.Label>First Name</Form.Label>
						<Form.Control
              placeholder='First Name'
              name='firstName'
              type='text'
              onChange={handleChange}
              value={state.firstName}
              required
            />

					</Form.Group>
					<Form.Group as={Col} md='4'>
						<Form.Label>Last Name</Form.Label>
						<Form.Control
              name='lastName'
              required
              type='text'
              placeholder='Last Name'
              onChange={handleChange}
              />
					</Form.Group>
				</Row>

				<Row className='d-flex justify-content-center'>
					<Form.Group as={Col} md='4'>
						<Form.Label>Email</Form.Label>
						<Form.Control
              required
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              />
					</Form.Group>

					<Form.Group as={Col} md='4'>
						<Form.Label>Confirm Email</Form.Label>
						<Form.Control
              required
              type='email'
              placeholder='Confirm Email'
              name="confirmEmail"
              onChange={handleChange}
              />
					</Form.Group>
				</Row>

				<Row className='d-flex justify-content-center'>
					<Form.Group as={Col} md='4'>
						<Form.Label>Password</Form.Label>
						<Form.Control
              required
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
              />
					</Form.Group>

					<Form.Group as={Col} md='4'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							required
							type='password'
							placeholder='Confirm Password'
              name="confirmPassword"
              onChange={handleChange}
						/>
					</Form.Group>
				</Row>

				<Row className='d-flex justify-content-center'>
					<Col className='d-flex justify-content-end'>
						Already have an account?
						<Link className='mx-3' onClick={() => setLogin(true)}>
							Login
						</Link>
					</Col>
					<Col className='d-flex justify-content-center'>
						<Button type='submit'>Sign Up</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export default SignUp;
