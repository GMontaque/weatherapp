import "./SearchBar.css";
import ApiResult from "./API";

function SearchBar() {
	// API code
	let dummy = ApiResult;
	console.log(dummy);
	return (
		<div className="input-group">
			<div className="form-outline">
				<input type="search" id="form1" className="form-control" />
				<label className="form-label" id="form1">
					Search
				</label>
			</div>
			<button type="button" className="btn btn-primary">
				<i className="fas fa-search"></i>
			</button>
		</div>
		// <div>
		// 	<input placeholder="search"></input>
		// 	<button type="button" className="btn btn-primary">
		// 		Submit
		// 	</button>
		// </div>
	);
}

export default SearchBar;
