import Starter from "./Starter";
import Card from "../weatherWidget/Card";

function CondtionalPage(props) {
	const buttonReset = () => {
		window.location.reload(false);
	};

	//console.log("conditional data " + props.testApiData);
	// when input is empty starter will show, when user submits the form card will show

	let weatherCards;

	// testapidata has the correct data
	// props.testApiData

	if (props.ApiData === undefined) {
		weatherCards = <Starter />;
	} else {
		weatherCards = (
			<Card
				weatherData={props.ApiData}
				parentReset={buttonReset}
				searchTitle={props.searchWord}
				warfare={props.testApiData}
			/>
		);
	}

	return weatherCards;
}

export default CondtionalPage;

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
