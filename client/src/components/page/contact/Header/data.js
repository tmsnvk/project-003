import React from "react";
import { HashLinkElement } from "components/shared/link";

const data = {
  title: "How we can help?",
  message: <>Take a look at our <HashLinkElement to={"/contact/#faq"} text={"FAQ"} /> or <HashLinkElement to={"/contact/#contactform"} text={"submit"} /> your own question!</>
};

export default data;