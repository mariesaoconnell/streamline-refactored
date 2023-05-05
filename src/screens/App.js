import { Container } from "react-bootstrap";

import Search from "../components/Search";
import Header from "../Header";
import Footer from "../Footer";

function App() {

  return (
		<Container
      id="main"
			className='d-flex flex-column justify-content-center'
			fluid>
			<Container
				className='d-flex flex-column justify-content-center bg-light'
				fluid>
				<Header />
				<Footer />
			</Container>
			<Container className='' id="sub" fluid>
				<Search />
			</Container>
		</Container>
	);
}

export default App;
