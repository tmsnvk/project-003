import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import App from "components/main/App";

ReactGA.initialize(process.env.REACT_APP_GA_KEY);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);