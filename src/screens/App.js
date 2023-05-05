import { Container, Image } from "react-bootstrap";

import Search from "../components/Search";
import Header from "../Header";
import Footer from "../Footer";
import Cover from '../assets/images/streamline-cover.svg';


function App() {

  return (
		<Container
			id='main'
			className='d-flex flex-column justify-content-center'
			fluid>

			<Container
				className='d-flex flex-column justify-content-center bg-light'
				fluid>
				<Header />
			</Container>

			<Container className='' id='sub' fluid>

				<Container className='d-flex justify-content-center'>
					<Image id='cover' src={Cover} />
				</Container>

				<Search />

			</Container>
			
			<Footer />
		</Container>
	);
}

export default App;
