import "./CardResult.css";
import sunnyIMG from "../../img/cloudsSunny.png";
import cloud from "../../img/cloud.png";
import rainImg from "../../img/rain.png";
import heavyRain from "../../img/heavyRain.png";
import sun from "../../img/sun.png";
import snow from "../../img/snow.png";
import thunder from "../../img/thunder.png";

function CardResult(props) {
	let sunRise = <i className="fas fa-sun"></i>;
	let sunSet = <i className="fas fa-moon"></i>;
	let tempHigh = <i className="fas fa-temperature-high"></i>;
	let tempLow = <i className="fas fa-temperature-low"></i>;
	let wind = <i className="fas fa-wind"></i>;
	let rain = <i className="fas fa-cloud-rain"></i>;

	let summaryWeatherText = props.summaryWeather;
	let dayImg = {};
	if (summaryWeatherText === "sunny") {
		dayImg = sunnyIMG;
	} else if (summaryWeatherText === "cloud") {
		dayImg = cloud;
	} else if (summaryWeatherText === "rain") {
		dayImg = rainImg;
	} else if (summaryWeatherText === "snow") {
		dayImg = heavyRain;
	} else if (summaryWeatherText === "thunder") {
		dayImg = sun;
	} else if (summaryWeatherText === "heavyrain") {
		dayImg = snow;
	} else if (summaryWeatherText === "sunnnyandcloudy") {
		dayImg = thunder;
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
			<h6>{props.summaryWeather}</h6>
			<div className="card-body">
				{/* weather summary for the day */}

				<div className="tempLayout ">
					<p className="marginR">
						{sunRise} {extractedSunRise}am
					</p>
					<p>
						{sunSet} {extractedSunSet}pm
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

// let cardIMG = props.summaryWeather

// switch (cardIMG) {
// 	case sunny:
// 		// code block
// 		break;
// 	case cloud:
// 		// code block
// 		break;
// 	case rain:
// 		// code block
// 		break;
// 	case snow:
// 		// code block
// 		break;
// 	case thunder:
// 		// code block
// 		break;
// 	case heavyrain:
// 		// code block
// 		break;
// 	case sunnnyandcloudy:
// 		// code block
// 		break;
// 	default:
// 	// code block
// }
