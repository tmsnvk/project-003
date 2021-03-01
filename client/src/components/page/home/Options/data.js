import React from "react";
import { PROJECT_ROOT } from "utilities/constants/urls";
import LinkElement from "./LinkElement";

const data = {
  paragraphs: [
    { 
      id: 1,
      render: {
        question: "Like what you see?",
        answer: <><LinkElement to={`/${PROJECT_ROOT}/pricing`} render={"Subscribe on our Pricing"} /> page and join our community immediately!</>
      }
    },
    { 
      id: 2,
      render: {
        question: "Have further questions?",
        answer: <>Visit our FAQ or <LinkElement to={`/${PROJECT_ROOT}/contact`} render={"get in touch with one of our agents"} /> on our Contact page!</>
      }
    }
  ]
};

export default data;