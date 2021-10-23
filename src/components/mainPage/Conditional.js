import Starter from "./Starter";
import Card from "../weatherWidget/Card";

function CondtionalPage(props) {
	// reset page to intial state
	const buttonReset = () => {
		window.location.reload(false);
	};

	// varaible is updated depending on if data is recevied
	let weatherCards;

	/* ---------------------------------------real card to use ----------------------------------------- */

	// props.ApiDataObject

	/* ---------------------------------------test card to use ----------------------------------------- */

	if (props.ApiData === undefined) {
		weatherCards = <Starter />;
	} else {
		weatherCards = (
			<Card
				// testcode --------------------------------------------
				weatherData={props.ApiData}
				// testcode above ----------------------------------
				pageReset={buttonReset}
				searchTitle={props.searchWord}
				apiObject={props.ApiDataObject}
			/>
		);
	}

	return weatherCards;
}

export default CondtionalPage;

//console.log("conditional data " + props.testApiData);

// import { useState } from "react";
// const [buttonCheck, setButtonCheck] = useState();

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
