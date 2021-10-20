import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
	// API search result
	const [searchResult, setSearchResult] = useState();
	// const [ApiResult, setApiResult] = useState();

	console.log(searchResult);

	// submit of search word
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchResult(e.target.input.value);

		if ("rome" === e.target.input.value) {
			// ApiSendRequest(e.target.input.value);
			dataStream(e.target.input.value);
		}

		// reset input field
		document.getElementById("formBody").reset();
	};

	// function ApiSendRequest(city) {
	// 	// Simple GET request using fetch
	// 	fetch(
	// 		//`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=128944992833eb85f19eeebe5415027c`
	// 		`https://api.openweathermap.org/data/2.5/onecall?lat=41.90&lon=12.49&exclude=minutely,hourly,alert,current&units=metric&appid=128944992833eb85f19eeebe5415027c`
	// 		//`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=878a4f623d8afad8416ca819b1bc4a4c`
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => setApiResult(data));
	// 	dataStream(city);
	// }
	// console.log(ApiResult);

	// api search result returned to parent component
	function dataStream(val) {
		props.searchWordResult(val);
		props.testsearchResult({
			lat: 41.9,
			lon: 12.49,
			timezone: "Europe/Rome",
			timezone_offset: 7200,
			daily: [
				{
					dt: 1634724000,
					sunrise: 1634707678,
					sunset: 1634746881,
					moonrise: 1634747580,
					moonset: 1634706120,
					moon_phase: 0.5,
					temp: {
						day: 16.94,
						min: 12.45,
						max: 21.24,
						night: 14.73,
						eve: 18.02,
						morn: 12.58,
					},
					feels_like: {
						day: 16.13,
						night: 14.14,
						eve: 17.26,
						morn: 11.64,
					},
					pressure: 1028,
					humidity: 55,
					dew_point: 7.85,
					wind_speed: 3.94,
					wind_deg: 222,
					wind_gust: 3.76,
					weather: [
						{
							id: 800,
							main: "Clear",
							description: "clear sky",
							icon: "01d",
						},
					],
					clouds: 7,
					pop: 0,
					uvi: 3.4,
				},
				{
					dt: 1634810400,
					sunrise: 1634794148,
					sunset: 1634833191,
					moonrise: 1634835360,
					moonset: 1634796240,
					moon_phase: 0.52,
					temp: {
						day: 19.98,
						min: 13.49,
						max: 20.17,
						night: 16.92,
						eve: 19.18,
						morn: 13.69,
					},
					feels_like: {
						day: 19.6,
						night: 16.91,
						eve: 19.19,
						morn: 13.05,
					},
					pressure: 1019,
					humidity: 60,
					dew_point: 11.85,
					wind_speed: 6.21,
					wind_deg: 157,
					wind_gust: 9.8,
					weather: [
						{
							id: 500,
							main: "Rain",
							description: "light rain",
							icon: "10d",
						},
					],
					clouds: 100,
					pop: 0.51,
					rain: 0.4,
					uvi: 2.43,
				},
				{
					dt: 1634896800,
					sunrise: 1634880619,
					sunset: 1634919502,
					moonrise: 1634923320,
					moonset: 1634886420,
					moon_phase: 0.56,
					temp: {
						day: 21.39,
						min: 16.08,
						max: 22.85,
						night: 17.2,
						eve: 20.51,
						morn: 16.48,
					},
					feels_like: {
						day: 21.2,
						night: 17.22,
						eve: 20.34,
						morn: 16.38,
					},
					pressure: 1015,
					humidity: 62,
					dew_point: 13.76,
					wind_speed: 6.25,
					wind_deg: 151,
					wind_gust: 10.1,
					weather: [
						{
							id: 500,
							main: "Rain",
							description: "light rain",
							icon: "10d",
						},
					],
					clouds: 100,
					pop: 0.52,
					rain: 2.67,
					uvi: 2.81,
				},
				{
					dt: 1634983200,
					sunrise: 1634967090,
					sunset: 1635005815,
					moonrise: 1635011460,
					moonset: 1634976540,
					moon_phase: 0.59,
					temp: {
						day: 19.04,
						min: 15.54,
						max: 22.41,
						night: 16.45,
						eve: 22.12,
						morn: 15.9,
					},
					feels_like: {
						day: 18.85,
						night: 16.37,
						eve: 21.85,
						morn: 15.9,
					},
					pressure: 1018,
					humidity: 71,
					dew_point: 13.61,
					wind_speed: 1.67,
					wind_deg: 27,
					wind_gust: 2.97,
					weather: [
						{
							id: 501,
							main: "Rain",
							description: "moderate rain",
							icon: "10d",
						},
					],
					clouds: 89,
					pop: 0.61,
					rain: 9.07,
					uvi: 2.71,
				},
				{
					dt: 1635069600,
					sunrise: 1635053562,
					sunset: 1635092128,
					moonrise: 1635099900,
					moonset: 1635066660,
					moon_phase: 0.62,
					temp: {
						day: 18.01,
						min: 13.57,
						max: 21.9,
						night: 13.57,
						eve: 20.51,
						morn: 14.22,
					},
					feels_like: {
						day: 17.51,
						night: 12.68,
						eve: 20,
						morn: 13.89,
					},
					pressure: 1018,
					humidity: 63,
					dew_point: 10.86,
					wind_speed: 3.75,
					wind_deg: 15,
					wind_gust: 6.75,
					weather: [
						{
							id: 804,
							main: "Clouds",
							description: "overcast clouds",
							icon: "04d",
						},
					],
					clouds: 100,
					pop: 0.36,
					uvi: 2.44,
				},
				{
					dt: 1635156000,
					sunrise: 1635140034,
					sunset: 1635178443,
					moonrise: 1635188760,
					moonset: 1635156600,
					moon_phase: 0.65,
					temp: {
						day: 15.03,
						min: 9.34,
						max: 18.95,
						night: 12.6,
						eve: 18.54,
						morn: 10.38,
					},
					feels_like: {
						day: 13.58,
						night: 11.51,
						eve: 17.65,
						morn: 9.28,
					},
					pressure: 1016,
					humidity: 38,
					dew_point: 0.79,
					wind_speed: 3.64,
					wind_deg: 15,
					wind_gust: 6.53,
					weather: [
						{
							id: 803,
							main: "Clouds",
							description: "broken clouds",
							icon: "04d",
						},
					],
					clouds: 75,
					pop: 0,
					uvi: 3,
				},
				{
					dt: 1635242400,
					sunrise: 1635226506,
					sunset: 1635264759,
					moonrise: 1635278100,
					moonset: 1635246300,
					moon_phase: 0.68,
					temp: {
						day: 15.46,
						min: 9.51,
						max: 18.91,
						night: 12.78,
						eve: 18.05,
						morn: 10.12,
					},
					feels_like: {
						day: 14.29,
						night: 11.94,
						eve: 17.14,
						morn: 8.78,
					},
					pressure: 1018,
					humidity: 47,
					dew_point: 4.29,
					wind_speed: 2.89,
					wind_deg: 16,
					wind_gust: 4.64,
					weather: [
						{
							id: 800,
							main: "Clear",
							description: "clear sky",
							icon: "01d",
						},
					],
					clouds: 5,
					pop: 0,
					uvi: 3,
				},
				{
					dt: 1635328800,
					sunrise: 1635312978,
					sunset: 1635351076,
					moonrise: 1635367800,
					moonset: 1635335640,
					moon_phase: 0.71,
					temp: {
						day: 15.09,
						min: 9.95,
						max: 18.79,
						night: 12.68,
						eve: 18.13,
						morn: 10.55,
					},
					feels_like: {
						day: 13.99,
						night: 11.73,
						eve: 17.02,
						morn: 9.49,
					},
					pressure: 1021,
					humidity: 51,
					dew_point: 4.88,
					wind_speed: 2.22,
					wind_deg: 18,
					wind_gust: 3.01,
					weather: [
						{
							id: 803,
							main: "Clouds",
							description: "broken clouds",
							icon: "04d",
						},
					],
					clouds: 65,
					pop: 0,
					uvi: 3,
				},
			],
		});
		props.resultValueArray([
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
		]);
	}

	return (
		<nav className="navbar navbar-expand-md  backgroundColor">
			<div className="d-flex flex-grow-1 backgroundNav">
				<form
					className="mr-2 my-auto w-100 d-inline-block order-1"
					onSubmit={handleSubmit}
					id="formBody"
				>
					<div className="input-group">
						<input
							type="text"
							className="form-control border border-right-0"
							placeholder="Search..."
							id="input"
						/>
						<span className="input-group-append">
							<button
								className="btn btn-outline-light border border-left-0"
								type="submit"
							>
								<i className="fa fa-search"></i>
							</button>
						</span>
					</div>
				</form>
			</div>
		</nav>
	);
}

export default SearchBar;

// import ApiSearch from "./API";

/* <ApiSearch
					searchWord={searchResult}
					//parentCallBackSecond={callbackFunctionSecond}
				></ApiSearch> */

// api result event
// const [messageSecond, setMessageSecond] = useState();

// const callbackFunctionSecond = (childDataSecond) => {
// 	setMessageSecond(childDataSecond);
// 	props.parentCallback(messageSecond);
// };

// const returnValue = (r) => {
// 	props.parentCallback(r);
// };

// console.log(messageSecond);

// let dummy = ApiSearch;
// console.log(dummy);
// const returnValue = (event) => {
// 	setreturnValueArray(event.target.value);
// };

// console.log(returnValueArray);

/* <a href="/" className="navbar-brand">
					Codeply
				</a> */

// resets field
// value={searchResult}
//resultReturn={returnValue}

// const handleChange = (e) => {
// 	setSearchResult(e.target.value);
// };

//onChange={handleChange}
// console.log(e.target.input.value);
// alert("submitted full work " + searchResult);

// <nav className="navbar navbar-light bg-light">
// 	<form className="form-inline">
// 		<input
// 			className="form-control mr-sm-2"
// 			type="search"
// 			placeholder="Search"
// 			aria-label="Search"
// 		/>
// 		<button
// 			className="btn btn-outline-success my-2 my-sm-0"
// 			type="submit"
// 		>
// 			Search
// 		</button>
// 	</form>
// </nav>

/* <div className="input-group">
			<div className="form-outline">
				<input type="search" id="form1" className="form-control" />
				<label className="form-label" id="form1">
					Search
				</label>
			</div>
			<button type="button" className="btn btn-primary">
				<i className="fas fa-search"></i>
			</button>
		</div> */
// <div>
// 	<input placeholder="search"></input>
// 	<button type="button" className="btn btn-primary">
// 		Submit
// 	</button>
// </div>
