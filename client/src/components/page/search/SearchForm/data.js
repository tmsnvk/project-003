import React from "react";
import { LinkElement } from "components/shared/link";

const data = [
  <>How to use our free database?<br />Enter either the valid name or ID of the Pokemon you would like to look up!</>,
  <>To start getting more detailed search results, sign up for <LinkElement to={"/pricing"} render={"one of our subscription options"} style={"PokemonSearch"} />.</>,
  <>To get more information, you are always more than welcome to <LinkElement to={"/contact"} render={"contact our support agents"} style={"PokemonSearch"} />.</>
];

export default data;