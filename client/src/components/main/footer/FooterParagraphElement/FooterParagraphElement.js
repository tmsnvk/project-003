import React from "react";
import { ParagraphElement } from "components/shared/text";
import data from "../data";

const FooterParagraphElement = () => {
  const renderFooterParagraphElement = data.footer.copyright.map(({ id, text }) => {
    return (
      <ParagraphElement
        key={id}
        render={text}
        align
        color={"grayLight"}
        fontfamily
        fontsize={"footerparagraphs"}
        fontweight={"600"}
        letterspacing={"0.2rem"}
        padding={"footerparagraphs"}
      />
    );
  });

  return (
    <section>
      {renderFooterParagraphElement}
    </section>
  );
};

export default FooterParagraphElement;