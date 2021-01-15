import React from "react";
import { ParagraphElement } from "components/shared/text";
import data from "../data";

const YearUpdate = () => {
  return (
    <>
      <ParagraphElement
        render={data.title}
        align
        color={"orangeDark"}
        fontfamily
        fontsize={"homestatsyear"}
        fontweight={"600"}
        margin={"homestatsyear"}
        padding={"homestatsyear"}
      />
    </>
  );
};

export default YearUpdate;