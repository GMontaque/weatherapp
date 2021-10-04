import logo from "./weatherIMG.svg";
import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";
import Card from "./components/weatherWidget/Card";
import Starter from "./components/Starter";

function App() {
	// add state for result from searchBar API to pass to card

	return (
		<div className="App">
			<header className="">
				<img src={logo} className="App-logo" alt="logo" />
				<SearchBar />
			</header>
			{/* add a conditon of starter is being shown card is not visible */}
			<Starter />
			<Card />
		</div>
	);
}

export default App;
