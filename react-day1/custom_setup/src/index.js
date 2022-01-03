import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>hello world</h1>;
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
