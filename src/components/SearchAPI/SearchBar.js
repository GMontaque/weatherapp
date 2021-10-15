import "./SearchBar.css";
// import ApiSearch from "./API";
import { useState } from "react";

function SearchBar(props) {
	// API code

	const [searchResult, setSearchResult] = useState();
	// let itWorks = "";
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchResult(e.target.input.value);

		if ("rome" === e.target.input.value) {
			dataStream();
		}

		// reset input field
		document.getElementById("formBody").reset();

		// returnValue(e);
	};

	function dataStream() {
		props.parentCallback({
			day: "sunday bar",
			summary_weather: "sunnny and cloudy",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		});
	}

	console.log(searchResult);

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
