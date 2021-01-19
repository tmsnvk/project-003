import React from "react";
import { LinkElement } from "components/shared/link";

const data = {
  title: "Your form submission was successful. You will shortly receive an email regarding your payment and login details.",
  message: {
    pOne: "Happy hunting!",
    pTwo: <><LinkElement to={"/"} text={"Click here to return"} /> to our home page!</>
  }
};

export default data;