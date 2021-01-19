import React from "react";
import { ParagraphElement } from "components/shared/text";
import data from "../data";

const YearUpdate = () => {
  return (
    <>
      <ParagraphElement
        render={data.title}
        margin={"homestatsyear"}
        padding={"homestatsyear"}
        align
        fontfamily
        fontsize={"homestatsyear"}
        color={"orangeDark"}
        fontweight={"600"}
      />
    </>
  );
};

export default YearUpdate;