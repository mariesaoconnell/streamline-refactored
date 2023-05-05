import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import Cover from './assets/images/streamline-cover.svg';

function Header(props) {
  return (
		<Container className='d-flex flex-column mb-4 justify-content-center'>
			<Navbar bg='light'>
				<Container className='d-flex mt-2 justify-content-between'>
					<Nav.Link className='mx-5' href='/'>
						Home
					</Nav.Link>
					<Nav.Link className='mx-5' href='/login'>
						Login
					</Nav.Link>
				</Container>
			</Navbar>
			{/* <Image src={Cover} /> */}
		</Container>
	);
}

export default Header;
