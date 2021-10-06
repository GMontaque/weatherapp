import logo from "./weatherIMG.svg";
import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";
import Card from "./components/weatherWidget/Card";
import Starter from "./components/Starter";

function App() {
	// add state for result from searchBar API to pass to card

	return (
		<div className="container-fluid">
			<div className="row">
				<img src={logo} className="App-logo" alt="logos" />
			</div>

			<div className="row">
				<SearchBar />
			</div>
			{/* add a conditon of starter is being shown card is not visible */}
			<div className="row">
				<Starter />
				<Card />
			</div>
		</div>
	);
}

export default App;
