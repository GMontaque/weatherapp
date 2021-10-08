import Starter from "./Starter";
import Card from "../weatherWidget/Card";

function condtionalPage() {
	// when input is empty starter will show, when user submits the form card will show
	let weatherCards = <Starter />;

	let rome = [
		{
			day: "monday",
			summary_weather: "sunny",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "tuesday",
			summary_weather: "cloud",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "wednesday",
			summary_weather: "rain",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "thursday",
			summary_weather: "snow",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "friday",
			summary_weather: "thunder",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "saturday",
			summary_weather: "heavy rain",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},

		{
			day: "sunday",
			summary_weather: "sunnny and cloudy",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		},
	];

	if (1 > 0) {
		return (weatherCards = <Card tree={rome} />);
	}

	// if (filteredExpense.length > 0) {
	// 	expensesContent = filteredExpense.map((expense) => (
	// 		<Card
	// 			key={expense.id}
	// 			title={expense.title}
	// 			amount={expense.amount}
	// 			date={expense.date}
	// 		/>
	// 	));
	// }

	return weatherCards;
}

export default condtionalPage;
