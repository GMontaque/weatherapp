import "./Card.css";
import CardResult from "./CardResult";

function Card(props) {
	function refreshPage() {
		props.pageReset(true);
	}

	return (
		<>
			<div>
				<button
					type="button"
					name=""
					id="resetBtn"
					className="btn btn-primary btn-lg "
					onClick={refreshPage}
				>
					<i className="fas fa-undo-alt"></i>
				</button>
				<h1 className="center">{props.searchTitle}</h1>
			</div>
			{/* --------------------------------------test card to use ----------------------------------------- */}
			<div className="reSize row">
				{props.weatherData.daily.map((weatherDay) => (
					<CardResult
						key={Math.random()}
						sunRiseData={weatherDay.sunrise}
						sunSetData={weatherDay.sunset}
						day={weatherDay.dt}
						summaryWeather={weatherDay.weather.map((weath) => {
							return weath.main;
						})}
						description={weatherDay.weather.map((weath) => {
							return weath.description;
						})}
						tempMax={weatherDay.temp.max}
						tempMin={weatherDay.temp.min}
						windSpeed={weatherDay.wind_speed}
						rainPercent={weatherDay.rain}
					/>
				))}
			</div>
			{/* ---------------------------------------real card to use ----------------------------------------- */}
			{/* <div className="reSize row">
				{props.apiObject.daily.map((resultPerDay) => (
					<CardResult
						key={Math.random()}
						sunRiseData={resultPerDay.sunrise}
						sunSetData={resultPerDay.sunset}
						day={resultPerDay.dt}
						summaryWeather={resultPerDay.weather.map((weath) => {
							return weath.main;
						})}
						description={resultPerDay.weather.map((weath) => {
							return weath.description;
						})}
						tempMax={resultPerDay.temp.max}
						tempMin={resultPerDay.temp.min}
						windSpeed={resultPerDay.wind_speed}
						rainPercent={resultPerDay.rain}
					/>
				))}
			</div> */}
		</>
	);
}

export default Card;

// let data = props.weatherData[1];
// console.log(data);

// console.log("result from search " + props.warfare);

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
