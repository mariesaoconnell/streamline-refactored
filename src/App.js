import Search from "./components/Search";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";

import { useState } from 'react'

function App() {
	const [user, setUser] = useState(null);
  return (
			<Layout>
				{
					user ?
					<Search /> : <HomeScreen setUser={setUser}/>
				}

			</Layout>
	);
}

export default App;
