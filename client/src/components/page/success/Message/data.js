import React from "react";
import { PROJECT_ROOT } from "utilities/constants/urls";
import { LinkElement } from "components/shared/link";

const data = {
  title: "Your form submission was successful. You will shortly receive an email regarding your payment and login details.",
  message: {
    pOne: "Happy hunting!",
    pTwo: <><LinkElement to={`/${PROJECT_ROOT}`} render={"Click here to return"} /> to our home page!</>
  },
  image: {
    src: "https://pokeres.bastionbot.org/images/pokemon/66.png",
    alt: "machop image"
  }
};

export default data;