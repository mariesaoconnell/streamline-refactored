import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'


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
		</Container>
	);
}

export default Header;
