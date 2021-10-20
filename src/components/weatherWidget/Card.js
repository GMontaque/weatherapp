import "./Card.css";
import CardResult from "./CardResult";

function Card(props) {
	let data = props.weatherData[1];
	console.log(data);

	function changePage() {
		props.parentReset(true);
	}

	return (
		<>
			<div>
				<button
					type="button"
					name=""
					id="resetBtn"
					className="btn btn-primary btn-lg "
					onClick={changePage}
				>
					<i className="fas fa-undo-alt"></i>
				</button>
				<h1 className="center">{props.searchTitle}</h1>
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
			<div className="reSize row">
				{props.warfare.daily.map((weathe) => (
					<CardResult
						key={Math.random()}
						sunRiseData={weathe.sunrise}
						sunSetData={weathe.sunset}
						day={weathe.dt}
						summaryWeather={weathe.weather.map((weath) => {
							return weath.main;
						})}
						description={weathe.weather.map((weath) => {
							return weath.description;
						})}
						tempMax={weathe.temp.max}
						tempMin={weathe.temp.min}
						windSpeed={weathe.wind_speed}
						rainPercent={weathe.rain}
					/>
				))}
			</div>
		</>
	);
}

export default Card;

// let cardIcon = {
// 	sunRise: <i className="fas fa-sun"></i>,
// 	sunSet: <i className="fas fa-moon"></i>,
// 	tempHigh: <i className="fas fa-temperature-high"></i>,
// 	tempLow: <i className="fas fa-temperature-low"></i>,
// 	wind: <i className="fas fa-wind"></i>,
// 	rain: <i className="fas fa-cloud-rain"></i>,
// };

// console.log(cardIcon);

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
