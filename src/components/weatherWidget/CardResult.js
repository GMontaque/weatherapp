import "./CardResult.css";
import thunder from "../../img/thunderIcon.png";
import rainImg from "../../img/Rain.png";
import snow from "../../img/Snow.png";
import MSHFImg from "../../img/Fog.png";
import sand from "../../img/Sand.png";
import clear from "../../img/Clear.png";
import cloud from "../../img/Cloud.png";

function CardResult(props) {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;

	let imgTitle = props.summaryWeather;
	let imgResultWord = imgTitle.toString();

	let dayImg;
	if (imgResultWord === "Thunderstorm") {
		dayImg = thunder;
	} else if (imgResultWord === "Rain" || imgResultWord === "Drizzle") {
		dayImg = rainImg;
	} else if (imgResultWord === "Snow") {
		dayImg = snow;
	} else if (
		imgResultWord === "Mist" ||
		imgResultWord === "Smoke" ||
		imgResultWord === "Haze"
	) {
		dayImg = MSHFImg;
	} else if (imgResultWord === "Dust" || imgResultWord === "Sand") {
		dayImg = sand;
	} else if (imgResultWord === "Fog") {
		dayImg = MSHFImg;
	} else if (imgResultWord === "Clear") {
		dayImg = clear;
	} else if (imgResultWord === "Clouds") {
		dayImg = cloud;
	}

	// generate date
	const date = new Date(props.day * 1000);
	let days = date.toLocaleDateString("en-US");

	function getDayName(dateStr, locale) {
		let date = new Date(dateStr);
		return date.toLocaleDateString(locale, { weekday: "long" });
	}
	let day = getDayName(days, "en-GB");

	// sun rise and set
	const timeSunRise = new Date(props.sunRiseData * 1000);
	let extractedSunRise = timeSunRise.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	const timeSunSet = new Date(props.sunSetData * 1000);
	let extractedSunSet = timeSunSet.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	// rain value
	let rainValueMM;
	if (props.rainPercent === undefined) {
		rainValueMM = "0";
	} else {
		rainValueMM = props.rainPercent;
	}

	return (
		<div className="card center">
			<h4 className="card-header ">{day}</h4>
			<img
				src={dayImg}
				className="rounded-circle img"
				alt=""
				height="200vh"
				width="200vw"
			/>
			<h6>{props.description}</h6>
			<div className="card-body">
				{/* weather summary for the day */}

				<div className="tempLayout ">
					<p className="marginR">
						{sunRise} {extractedSunRise}
					</p>
					<p>
						{sunSet} {extractedSunSet}
					</p>
				</div>
				<div className="inner-Text list-group">
					<p className="list-group-item">
						{tempHigh}: {Math.round(props.tempMax)}C - {tempLow}:{" "}
						{Math.round(props.tempMin)}C
					</p>
					<p className="list-group-item">
						{wind} {Math.round(props.windSpeed)} Km/h
					</p>
					<p className="list-group-item">
						{rain} {rainValueMM} mm
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardResult;
