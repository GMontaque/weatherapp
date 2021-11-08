import "./Starter.css";
import thunder from "../../img/thunderIcon.png";
import snow from "../../img/Snow.png";
import clear from "../../img/Clear.png";

function Starter() {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;

	return (
		<>
			{/* description of website  */}
			<p className="center summaryText">
				Here you can search the weather for the next 8 days of any city, simply
				enter the city name. See below is an example of what you can expect.
			</p>
			{/*  example of results */}
			<div className="row spacing">
				<div className="card center 1">
					<h4 className="card-header ">Monday</h4>
					<img
						src={thunder}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 07:23</p>
							<p>{sunSet} 19:44</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 23C - {tempLow}: 12C
							</p>
							<p className="list-group-item">{wind} 22 Km/h</p>
							<p className="list-group-item">{rain} 20 mm</p>
						</div>
					</div>
				</div>

				<div className="card center 2">
					<h4 className="card-header ">Tuesday</h4>
					<img
						src={clear}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 08:57</p>
							<p>{sunSet} 22:44</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 10C - {tempLow}: 1C
							</p>
							<p className="list-group-item">{wind} 05 Km/h</p>
							<p className="list-group-item">{rain} 10 mm</p>
						</div>
					</div>
				</div>

				<div className="card center 3">
					<h4 className="card-header ">Wednesday</h4>
					<img
						src={snow}
						className="rounded-circle img"
						alt=""
						height="200vh"
						width="200vw"
					/>
					<h6>Sunny intervals and a gentle breeze</h6>
					<div className="card-body">
						{/* weather summary for the day */}

						<div className="tempLayout ">
							<p className="marginR">{sunRise} 09:23</p>
							<p>{sunSet} 16:44</p>
						</div>
						<div className="inner-Text list-group">
							<p className="list-group-item">
								{tempHigh}: 3C - {tempLow}: -6C
							</p>
							<p className="list-group-item">{wind} 15 Km/h</p>
							<p className="list-group-item">{rain} 05 mm</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Starter;
