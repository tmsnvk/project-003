import React from "react";
import { LinkElement } from "components/shared/link";
import { SpanElement } from "components/shared/text";

const data = {
  paragraphs: [
    { 
      id: 1,
      render: <><SpanElement render={"Like what you see?"} /> - Subscribe on our <LinkElement to={"/pricing"} render={"Pricing"} hover={"orangeDark"} /> page and join our community immediately!</>,
      padding: "homeoptions"
    },
    { 
      id: 2,
      render: <><SpanElement render={"Have further questions?"} /> - Visit our FAQ or get in touch with one of our agents on our <LinkElement to={"/contact"} render={"Contact"} hover={"orangeDark"} /> page!</>,
      padding: null
    }
  ]
};

export default data;