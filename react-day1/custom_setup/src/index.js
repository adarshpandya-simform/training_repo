import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <h1
      onClick={() => {
        setCounter((prevCount) => prevCount + 1);
      }}
    >
      count : {counter}
    </h1>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
