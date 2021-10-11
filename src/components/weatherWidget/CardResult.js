import "./CardResult.css";
import exampleIMG from "../../img/cloudsSunny.png";

function CardResult(props) {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;
	return (
		<div className="card center 1">
			<h4 className="card-header ">Card - {props.day}</h4>
			<img
				src={exampleIMG}
				className="rounded-circle img"
				alt=""
				height="200vh"
				width="200vw"
			/>
			<h6>{props.summaryWeather}</h6>
			<div className="card-body">
				{/* weather summary for the day */}

				<div className="tempLayout ">
					<p className="marginR">
						{sunRise} {props.sunRiseData}am
					</p>
					<p>
						{sunSet} {props.sunSetData}pm
					</p>
				</div>
				<div className="inner-Text list-group">
					<p className="list-group-item">
						{tempHigh}: {props.tempMax}C - {tempLow} {props.tempMin}C
					</p>
					<p className="list-group-item">
						{wind} {props.windSpeed}KMH
					</p>
					<p className="list-group-item">
						{rain} {props.rainPercent}%
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardResult;
