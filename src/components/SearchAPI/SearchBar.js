import "./SearchBar.css";
import ApiResult from "./API";

function SearchBar() {
	// API code
	let dummy = ApiResult;
	console.log(dummy);
	return (
		<nav className="navbar navbar-expand-md  backgroundColor">
			<div className="d-flex flex-grow-1 backgroundNav">
				{/* <a href="/" className="navbar-brand">
					Codeply
				</a> */}
				<form className="mr-2 my-auto w-100 d-inline-block order-1">
					<div className="input-group">
						<input
							type="text"
							className="form-control border border-right-0"
							placeholder="Search..."
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
	);
}

export default SearchBar;
