import "./Starter.css";

function Starter() {
	return (
		<div>
			<h2>Please see below instructions and example</h2>
			{/* description of how the website works */}
			<p>
				text descrrbiing what this app does,text descrrbiing what this app
				does,text descrrbiing what this app does,text descrrbiing what this app
				does
			</p>
			{/* below will be an example of the results the user shoudl execpt */}
			<div>
				<h4>Example - Day of the week</h4>
				<img src="#" class="img-fluid" alt="" />

				<p>sun rise</p>
				<p>sun set</p>

				<div className="inner-Text">
					<p>temp</p>
					<p>wind</p>
					<p>perciitations</p>
				</div>
			</div>
		</div>
	);
}

export default Starter;
