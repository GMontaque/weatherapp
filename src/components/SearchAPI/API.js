// import { useState } from "react";

function ApiSearch(props) {
	// API code
	// let rome = [
	// 	{
	// 		day: "monday",
	// 		summary_weather: "sunny",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "tuesday",
	// 		summary_weather: "cloud",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "wednesday",
	// 		summary_weather: "rain",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "thursday",
	// 		summary_weather: "snow",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "friday",
	// 		summary_weather: "thunder",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "saturday",
	// 		summary_weather: "heavy rain",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},

	// 	{
	// 		day: "sunday",
	// 		summary_weather: "sunnny and cloudy",
	// 		sun_rise: "0732",
	// 		sun_set: 1600,
	// 		temp_Max: 23,
	// 		temp_Min: "01",
	// 		wind_speed: 10,
	// 		rain: 20,
	// 	},
	// ];

	// ---------------------------------------call back attempt------------------------------------------------------------

	// const ApiCheck = () => {
	// 	props.parentCallBackSecond(itWorks);
	// };

	// props.parentCallback(itWorks);

	// const [third, setThird] = useState();

	let itWorks = [];
	if ("rome" === props.searchWord) {
		itWorks = {
			day: "sunday",
			summary_weather: "sunnny and cloudy",
			sun_rise: "0732",
			sun_set: 1600,
			temp_Max: 23,
			temp_Min: "01",
			wind_speed: 10,
			rain: 20,
		};
	}

	return <>{itWorks.day} </>;
}

export default ApiSearch;
