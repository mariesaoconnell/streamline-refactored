import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function HomeScreen({setUser}) {

  // FUNCTION FOR DEMO PURPOSE.. TRUE LOGIN CAPABILITIES TO BE HANDLED BY LOGIN.JS
  const login = () =>{
    setUser(true)
  }

  return (
		<Container>
			Welcome to Streamline, Login or Sign up to search!
			<Row>
				<Col>
					<Link className='btn btn-primary' onClick={login}>
						Login
					</Link>
				</Col>
				<Col>
					<Link className='btn btn-primary'>Sign Up</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default HomeScreen;
