import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./assets/logo.svg";
import styles from "./App.module.css";

const App = () => {
	const [counter, setCounter] = useState(0);
	console.log("ji");
	return (
		<>
			<h1
				className={styles.h1}
				onClick={() => {
					setCounter((prevCount) => prevCount + 1);
				}}
			>
				count : {counter}
			</h1>
			<p>sample svg</p>
			<img src={logo} alt="logo" />
		</>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
