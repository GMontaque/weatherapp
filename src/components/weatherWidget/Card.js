import "./Card.css";
import CardResult from "./CardResult";

function Card(props) {
	console.log(props.tree[1]);
	return (
		<>
			<button
				type="button"
				name=""
				id="resetBtn"
				className="btn btn-primary btn-lg "
			>
				<i className="fas fa-undo-alt"></i>
			</button>

			<CardResult />
		</>
	);
}

export default Card;

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
