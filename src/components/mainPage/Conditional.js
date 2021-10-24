import Starter from "./Starter";
import Card from "../weatherWidget/Card";

function CondtionalPage(props) {
	// reset page to intial state
	const buttonReset = () => {
		window.location.reload(false);
	};

	// varaible is updated depending on if data is recevied
	let weatherCards;

	if (props.ApiDataObject === undefined) {
		weatherCards = <Starter />;
	} else {
		weatherCards = (
			<Card
				pageReset={buttonReset}
				searchTitle={props.searchWord}
				apiObject={props.ApiDataObject}
			/>
		);
	}

	return weatherCards;
}

export default CondtionalPage;
