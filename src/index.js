import "./scss/main.scss";
import React from "react";
import { render } from "react-dom";

const App = () => {
	return (
		<div>
			<h3>Hello World</h3>
		</div>
	);
};

render(<App />, document.getElementById("app"));
