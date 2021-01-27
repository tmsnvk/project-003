import React from "react";
import { ParagraphElement } from "components/shared/text";
import data from "../data";

const YearUpdate = () => {
  return (
    <>
      <ParagraphElement render={data.title} $style={"HomeStatisticsYear"} />
    </>
  );
};

export default YearUpdate;