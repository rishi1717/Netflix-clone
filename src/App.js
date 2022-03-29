import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Rowpost from "./components/RowPost/Rowpost"
import { action,originals,comedy,romance,horror,trending } from "./constants/constants"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Rowpost url={trending} title="Trending" />
			<Rowpost url={originals} title="Netflix Originals" />

			<Rowpost url={action} title="Action" isSmall />
			<Rowpost url={comedy} title="Comedy" isSmall />
			<Rowpost url={romance} title="Romance" isSmall />
			<Rowpost url={horror} title="Horror" isSmall />
		</div>
	)
}

export default App
