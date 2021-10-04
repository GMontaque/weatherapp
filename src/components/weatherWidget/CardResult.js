import "./CardResult.css";

function CardResult() {
	return (
		<div>
			<h4>Monday</h4>
			<img
				src={""}
				className="rounded-circle"
				alt="daily weather img"
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
	);
}

export default CardResult;
