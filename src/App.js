import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";

import CondtionalPage from "./components/mainPage/Conditional";
import { useState } from "react";

function App() {
	// API search value from search Bar
	const [message, setMessage] = useState();

	const callbackSearchResult = (childData) => {
		setMessage(childData);
	};

	// search word
	const [searchWord, setsearchWord] = useState();

	const callBackSearchWord = (childData) => {
		setsearchWord(childData);
	};

	// api result
	const [rainWord, setrainWord] = useState();

	const callBackrainWord = (childData) => {
		setrainWord(childData);
	};

	console.log(rainWord);

	return (
		<div className="container-fluid imgBackground">
			<div className="row searchRow">
				<SearchBar
					resultValueArray={callbackSearchResult}
					searchWordResult={callBackSearchWord}
					testsearchResult={callBackrainWord}
				/>
			</div>
			{/* add a conditon of starter is being shown card is not visible */}
			<div className="row">
				<h1 className="center">7 Day Weather Forcast</h1>
				<CondtionalPage
					ApiData={message}
					searchWord={searchWord}
					testApiData={rainWord}
				/>
			</div>
		</div>
	);
}

export default App;

//checking state value before passing to conditional
// if (message !== undefined) {
// 	let house = JSON.stringify(message[0]);
// 	console.log("it worked" + house);
// }

/* <div className="row">
				might remmove title? 
				 <h1 className="mainHeader">7 Day Weather Forcast</h1> 
				 <img src={logo} className="weather-logo" alt="logos" /> 
			</div> */
/* <br />
			<div className="row">
				<Card />
			</div> */

// import logo from "./weatherIMG.svg";
// import Card from "./components/weatherWidget/Card";
// import Starter from "./mainPage/Starter";

// add state for result from searchBar API to pass to card
// let SearchResultWeather = [
// 	{
// 		id: 1,
// 		day: "monday",
// 		summary_weather: "sunny",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 2,
// 		day: "tuesday",
// 		summary_weather: "cloud",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 3,
// 		day: "wednesday",
// 		summary_weather: "rain",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 4,
// 		day: "thursday",
// 		summary_weather: "snow",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 5,
// 		day: "friday",
// 		summary_weather: "thunder",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 6,
// 		day: "saturday",
// 		summary_weather: "heavyrain",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},

// 	{
// 		id: 7,
// 		day: "sunday",
// 		summary_weather: "sunnnyandcloudy",
// 		sun_rise: "0732",
// 		sun_set: 1600,
// 		temp_Max: 23,
// 		temp_Min: "01",
// 		wind_speed: 10,
// 		rain: 20,
// 	},
// ];

// const displayObject = () => {
// 	house = JSON.stringify(message);

// };

// passing search result array to card components idea
// let SearchResultWeather = [message];
// //total array
// console.log("total array " + SearchResultWeather);
