import { useState } from "react";
import "./SearchBar.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SearchBar(props) {
	// submit of search word
	const handleSubmit = (e) => {
		e.preventDefault();

		// search word value
		props.searchWordResult(e.target.input.value);

		// city name API reqeust, returns lat and lon
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${e.target.input.value}&appid=128944992833eb85f19eeebe5415027c`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.message === "city not found") {
					const MySwal = withReactContent(Swal);

					MySwal.fire({
						icon: "error",
						title: "Error",
						text: "City not found",
					});
				} else {
					ApiSendRequest(data.coord);
				}
			});

		// reset input field and form
		document.getElementById("formBody").reset();
		setSearchPlaceholder("Reset to search again");
	};

	function ApiSendRequest({ lat, lon }) {
		// API reqeust for 8 days weather data
		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alert,current&units=metric&appid=128944992833eb85f19eeebe5415027c`
			//`appid=878a4f623d8afad8416ca819b1bc4a4c`
		)
			.then((response) => response.json())
			.then((data) => dataStream(data));
	}

	//api search result returned to app component
	function dataStream(val) {
		console.log(val);
		props.apiDataResult(val);
	}

	// input validation - only letters allowed
	const [SearchPlaceholder, setSearchPlaceholder] = useState("Search...");

	let lettersOnly = (e) => {
		setSearchPlaceholder(e.target.value.replace(/[^a-zA-z]/, ""));
	};

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
							id="input"
							placeholder={SearchPlaceholder}
							onChange={lettersOnly}
							required
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
