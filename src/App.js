import "./App.css";
import SearchBar from "./components/SearchAPI/SearchBar";

import CondtionalPage from "./components/mainPage/Conditional";
import { useState } from "react";

function App() {
	// search word
	const [searchWord, setsearchWord] = useState();

	const callBackSearchWord = (childData) => {
		setsearchWord(childData);
	};

	// api result
	const [ApiData, setApiData] = useState();

	const callBackApiData = (childData) => {
		setApiData(childData);
	};

	return (
		<div className="container-fluid imgBackground">
			<div className="row searchRow">
				<SearchBar
					searchWordResult={callBackSearchWord}
					apiDataResult={callBackApiData}
				/>
			</div>
			{/* add a conditon of starter is being shown card is not visible */}
			<div className="row ">
				<h1 className="center">8 Day Weather Forcast</h1>
				<CondtionalPage searchWord={searchWord} ApiDataObject={ApiData} />
			</div>
		</div>
	);
}

export default App;
