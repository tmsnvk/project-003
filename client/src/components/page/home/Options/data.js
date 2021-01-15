import { LinkElement } from "components/shared/link";
import { SpanElement } from "components/shared/text";

const data = {
  paragraphs: [
    { 
      id: 1,
      render: <><SpanElement render={"Like what you see?"} /> - Subscribe on our <LinkElement to={"/pricing"} render={"Pricing"} hover={"orangeDark"} /> page and join our community immediately!</>,
      align: true,
      padding: "homeoptions"
    },
    { 
      id: 2,
      render: <><SpanElement render={"Have further questions?"} /> - Visit our FAQ or get in touch with one of our agents on our <LinkElement to={"/contact"} render={"Contact"} hover={"orangeDark"} /> page!</>,
      align: true,
      padding: null
    }
  ]
};

export default data;