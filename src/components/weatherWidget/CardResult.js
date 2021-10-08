import "./CardResult.css";
import exampleIMG from "../../img/cloudsSunny.png";

function CardResult() {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;
	return (
		<div className="card-deck">
			<div className="card center 1">
				<h4 className="card-header ">Card - Monday</h4>
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
				<h4 className="card-header ">Card - Tuesday</h4>
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
				<h4 className="card-header ">Card - Wednesday</h4>
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
	);
}

export default CardResult;
