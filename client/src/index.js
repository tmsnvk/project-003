import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./maincomponents/App";

ReactDOM.render(
  <BrowserRouter>
  	<App />
  </BrowserRouter>,
  document.querySelector("#root")
);

// todo:
// - scroll to top when clicking on links - https://reactrouter.com/web/guides/scroll-restoration