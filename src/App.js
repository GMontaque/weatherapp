// import logo from "./weatherIMG.svg";
import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";
// import Card from "./components/weatherWidget/Card";
// import Starter from "./mainPage/Starter";
import CondtionalPage from "./components/mainPage/Conditional";
import { useState } from "react";

function App() {
	// add state for result from searchBar API to pass to card
	let SearchResultWeather = [
		{
			id: 1,
			day: "monday",
			summary_weather: "sunny",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 2,
			day: "tuesday",
			summary_weather: "cloud",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 3,
			day: "wednesday",
			summary_weather: "rain",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 4,
			day: "thursday",
			summary_weather: "snow",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 5,
			day: "friday",
			summary_weather: "thunder",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 6,
			day: "saturday",
			summary_weather: "heavyrain",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			id: 7,
			day: "sunday",
			summary_weather: "sunnnyandcloudy",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},
	];

	const [message, setMessage] = useState();

	const callbackFunction = (childData) => {
		setMessage(childData);
	};

	console.log("data from api " + message);
	return (
		<div className="container-fluid imgBackground">
			{/* <div className="row">
				might remmove title? 
				 <h1 className="mainHeader">7 Day Weather Forcast</h1> 
				 <img src={logo} className="weather-logo" alt="logos" /> 
			</div> */}

			<div className="row searchRow">
				<SearchBar parentCallback={callbackFunction} />
			</div>
			{/* add a conditon of starter is being shown card is not visible */}
			<div className="row">
				<h1 className="center">7 Day Weather Forcast</h1>
				<CondtionalPage ApiData={SearchResultWeather} />
			</div>
			{/* <br />
			<div className="row">
				<Card />
			</div> */}
		</div>
	);
}

export default App;
