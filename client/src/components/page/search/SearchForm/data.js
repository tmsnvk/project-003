import React from "react";
import { LinkElement } from "components/shared/link";

const data = [
  <>How to use our free database?<br />Enter either the valid name or ID of the Pokemon you would like to look up!</>,
  <>To start getting more detailed search results, please sign up for one of our <LinkElement to={"/pricing"} text={"subscription"} /> options.</>,
  <>To get more information, you are always more than welcome to <LinkElement to={"/contact"} text={"contact"} /> our support agents.</>
];

export default data;