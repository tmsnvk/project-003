import React from "react";
import { PROJECT_ROOT } from "utilities/constants/urls";
import { HashLinkElement } from "components/shared/link";

const data = {
  title: "How we can help?",
  message: <>Take a look at our <HashLinkElement to={`/${PROJECT_ROOT}/contact/#faq`} render={"FAQ"} /> or <HashLinkElement to={`/${PROJECT_ROOT}/contact/#contactform`} render={"submit"} /> your own question!</>
};

export default data;