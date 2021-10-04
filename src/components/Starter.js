import "./Starter.css";
import exampleIMG from "../img/cloudsSunny.png";

function Starter() {
	return (
		<div>
			<h2>Please see below instructions and example</h2>
			{/* description of how the website works */}
			<p>
				Here you can search the weather for the next 7 days on any city, please
				enter the city and press enter. below is an example of the results that
				you will get back
			</p>
			{/* below will be an example of the results the user shoudl execpt */}
			<div>
				<h4>Example - Monday</h4>
				<img
					src={exampleIMG}
					className="rounded-circle"
					alt=""
					height="300rem"
					width="300rem"
				/>
				<p>Summary: Sunny intervals and a gentle breeze</p>

				<p>sun rise: 07:23am</p>
				<p>sun set: 19:44pm</p>

				<div className="inner-Text">
					<p>temp Max/Min : 23C - 1C</p>
					<p>wind speed: 10KMH</p>
					<p>Rain: 20%</p>
				</div>
			</div>
		</div>
	);
}

export default Starter;
