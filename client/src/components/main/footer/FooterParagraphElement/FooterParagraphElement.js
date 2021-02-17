import React from "react";
import ParagraphElement from "./ParagraphElement";
import data from "../data";

const FooterParagraphElement = () => {
  const renderFooterParagraphElement = data.copyright.map(({ id, render }) => {
    return (
      <ParagraphElement key={id} render={render} />
    );
  });

  return (
    <section>
      {renderFooterParagraphElement}
    </section>
  );
};

export default FooterParagraphElement;