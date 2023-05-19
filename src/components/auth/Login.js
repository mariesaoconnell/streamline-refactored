import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login({ setLogin }) {

  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: ''
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
      event.stopPropagation()
    }
    setValidated(true)
    console.log(state)
    // POST REQUEST TO SIGN IN
  }

	return (
		<>
			<h1>Login</h1>

			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Row className='d-flex justify-content-center'>
					<Form.Group as={Col} md='4'>
						<Form.Label>E-mail</Form.Label>
						<Form.Control
							placeholder='E-mail'
							name='email'
							type='email'
							onChange={handleChange}
							value={state.email}
							required
						/>
					</Form.Group>

					<Form.Group as={Col} md='4'>
						<Form.Label> Password </Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleChange}
							required
						/>
					</Form.Group>
				</Row>
				<Row className='d-flex justify-content-between text-center'>
          <Col>
					  <Link className='mx-3' onClick={() => setLogin(false)}>
              Sign Up
            </Link>
          </Col>
          <Col>
            <Button type='submit'>Login</Button>
          </Col>
				</Row>
			</Form>
		</>
	);
}

export default Login;
