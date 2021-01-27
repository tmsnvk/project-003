import React from "react";
import { PROJECT_ROOT } from "utilities/constants/urls";
import { LinkElement } from "components/shared/link";

const data = {
  message: <><LinkElement to={`/${PROJECT_ROOT}`} render={"Click here to return"} $style={"ErrorMessage"} /> to our home page!</>,
};

export default data;