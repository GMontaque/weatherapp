import "./Card.css";
import CardResult from "./CardResult";

function Card(props) {
	let data = props.weatherData[1];
	console.log(data);

	// let cardIcon = {
	// 	sunRise: <i className="fas fa-sun"></i>,
	// 	sunSet: <i className="fas fa-moon"></i>,
	// 	tempHigh: <i className="fas fa-temperature-high"></i>,
	// 	tempLow: <i className="fas fa-temperature-low"></i>,
	// 	wind: <i className="fas fa-wind"></i>,
	// 	rain: <i className="fas fa-cloud-rain"></i>,
	// };

	// console.log(cardIcon);

	return (
		<>
			<div>
				<button
					type="button"
					name=""
					id="resetBtn"
					className="btn btn-primary btn-lg "
				>
					<i className="fas fa-undo-alt"></i>
				</button>
			</div>
			<div className="reSize row">
				{props.weatherData.map((weatherDay) => (
					<CardResult
						key={weatherDay.id}
						day={weatherDay.day}
						summaryWeather={weatherDay.summary_weather}
						sunRiseData={weatherDay.sun_rise}
						sunSetData={weatherDay.sun_set}
						tempMax={weatherDay.temp_Max}
						tempMin={weatherDay.temp_Min}
						windSpeed={weatherDay.wind_speed}
						rainPercent={weatherDay.rain}
					/>
				))}
			</div>
		</>
	);
}

export default Card;

/* <ul className="expenses-list">
{props.items.map((expense) => (
	<CardResult
		// key={expense.id}
		// title={expense.title}
		// amount={expense.amount}
		// date={expense.date}
	/>
))}
</ul> */
