import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import Cover from './assets/images/streamline-cover.svg';

function Header(props) {
  return (
		<Container className='d-flex flex-column justify-content-center'>
			<Navbar bg='light'>
				<Image src={Cover} />
				<Container>
					<Nav.Link className='mx-5' href='/'>
						Home
					</Nav.Link>
					<Nav.Link className='mx-5' href='/login'>
						Login
					</Nav.Link>
				</Container>
			</Navbar>
		</Container>
	);
}

export default Header;
