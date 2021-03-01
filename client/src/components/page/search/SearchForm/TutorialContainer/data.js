import React from "react";
import LinkElement from "./LinkElement";

const data = {
  question: "How to use our free database?",
  answer: {
    pOne: "Enter either the valid name or ID of the Pokemon you would like to look up!",
    pTwo: <>To start getting more detailed search results, sign up for <LinkElement to={"/pricing"} render={"one of our subscription options"} />.</>,
    pThree: <>To get more information, you are always more than welcome to <LinkElement to={"/contact"} render={"contact our support agents"} />.</>
  }
};

export default data;