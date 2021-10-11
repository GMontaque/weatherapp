import Starter from "./Starter";
import Card from "../weatherWidget/Card";

function condtionalPage(props) {
	// when input is empty starter will show, when user submits the form card will show
	let weatherCards = <Starter />;

	if (1 > 0) {
		return (weatherCards = <Card weatherData={props.ApiData} />);
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
