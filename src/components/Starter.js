import "./Starter.css";
import exampleIMG from "../img/cloudsSunny.png";

function Starter() {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;
	return (
		<>
			<h2 className="center">Please see below instructions and example</h2>
			{/* description of how the website works */}
			<p className="center">
				Here you can search the weather for the next 7 days on any city, please
				enter the city and press enter. below is an example of the results that
				you will get back
			</p>
			{/* below will be an example of the results the user shoudl execpt */}
			<div className="card-deck">
				<div className="card center 1">
					<h4 className="card-header ">Example - Monday</h4>
					<img
						src={exampleIMG}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 07:23am</p>
							<p>{sunSet} 19:44pm</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 23C - {tempLow} 1C
							</p>
							<p className="list-group-item">{wind} 10KMH</p>
							<p className="list-group-item">{rain} 20%</p>
						</div>
					</div>
				</div>

				<div className="card center 2">
					<h4 className="card-header ">Example - Tuesday</h4>
					<img
						src={exampleIMG}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 07:23am</p>
							<p>{sunSet} 19:44pm</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 23C - {tempLow} 1C
							</p>
							<p className="list-group-item">{wind} 10KMH</p>
							<p className="list-group-item">{rain} 20%</p>
						</div>
					</div>
				</div>

				<div className="card center 3">
					<h4 className="card-header ">Example - Wednesday</h4>
					<img
						src={exampleIMG}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 07:23am</p>
							<p>{sunSet} 19:44pm</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 23C - {tempLow} 1C
							</p>
							<p className="list-group-item">{wind} 10KMH</p>
							<p className="list-group-item">{rain} 20%</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Starter;
