import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import Cover from './assets/images/streamline-cover.svg';

function Header(props) {
  return (
		<Container className='d-flex flex-column justify-content-center'>
			<Image src={Cover} />
			<Navbar bg='light'>
				<Container>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/login'>Login</Nav.Link>
				</Container>
			</Navbar>
		</Container>
	);
}

export default Header;
