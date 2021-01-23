import React from "react";
import { PROJECT_ROOT } from "utilities/constants/urls";
import { LinkElement } from "components/shared/link";
import { SpanElement } from "components/shared/text";

const data = {
  paragraphs: [
    { 
      id: 1,
      render: <><SpanElement render={"Like what you see?"} style={"HomeOptions"} /> - Subscribe on our <LinkElement to={`/${PROJECT_ROOT}/pricing`} render={"Pricing"} style={"HomeOptions"} /> page and join our community immediately!</>,
    },
    { 
      id: 2,
      render: <><SpanElement render={"Have further questions?"} style={"HomeOptions"} /> - Visit our FAQ or get in touch with one of our agents on our <LinkElement to={`/${PROJECT_ROOT}/contact`} render={"Contact"} style={"HomeOptions"} /> page!</>,
    }
  ]
};

export default data;