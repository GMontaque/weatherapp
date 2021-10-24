import "./Card.css";
import CardResult from "./CardResult";

function Card(props) {
	function refreshPage() {
		props.pageReset(true);
	}

	return (
		<>
			<div className="grid-container">
				<button
					type="button"
					name=""
					id="resetBtn"
					className="btn btn-primary btn-lg item1"
					onClick={refreshPage}
				>
					<i className="fas fa-undo-alt"></i>
				</button>
				<h1 className="center titleSize">{props.searchTitle}</h1>
			</div>
			<div className="reSize row">
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
			</div>
		</>
	);
}

export default Card;
