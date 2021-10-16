import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
	// API search result
	const [searchResult, setSearchResult] = useState();

	// submit of search word
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchResult(e.target.input.value);

		if ("rome" === e.target.input.value) {
			dataStream();
		}

		// reset input field
		document.getElementById("formBody").reset();
	};

	// api search result returned to parent component
	function dataStream() {
		props.parentCallback([
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

	console.log(searchResult);

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
				{/* <ApiSearch
					searchWord={searchResult}
					//parentCallBackSecond={callbackFunctionSecond}
				></ApiSearch> */}
			</div>
		</nav>
	);
}

export default SearchBar;

// import ApiSearch from "./API";

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
