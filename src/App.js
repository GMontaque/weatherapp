// import logo from "./weatherIMG.svg";
import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";
// import Card from "./components/weatherWidget/Card";
// import Starter from "./mainPage/Starter";
import CondtionalPage from "./components/mainPage/Conditional";

function App() {
	// add state for result from searchBar API to pass to card

	return (
		<div className="container-fluid imgBackground">
			{/* <div className="row">
				might remmove title? 
				 <h1 className="mainHeader">7 Day Weather Forcast</h1> 
				 <img src={logo} className="weather-logo" alt="logos" /> 
			</div> */}

			<div className="row searchRow">
				<SearchBar />
			</div>
			{/* add a conditon of starter is being shown card is not visible */}
			<div className="row">
				<h1 className="center">7 Day Weather Forcast</h1>
				<CondtionalPage />
			</div>
			{/* <br />
			<div className="row">
				<Card />
			</div> */}
		</div>
	);
}

export default App;
