import { Container, Image } from "react-bootstrap";
import Search from "./components/Search";
import Cover from './assets/images/streamline-cover.svg';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";


function App() {

  return (
			// <Container
			// 	id='main'
			// 	className='d-flex flex-column justify-content-center'
			// 	fluid>

			// 	<Container className='d-flex justify-content-center py-3'>
			// 		<Image id='cover' src={Cover} />
			// 	</Container>

			// 	<Navigation />
			// 	<Search />

			// </Container>
			<Layout>
				<Search />
			</Layout>
	);
}

export default App;
