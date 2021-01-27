import React from "react";
import { ParagraphElement } from "components/shared/text";
import data from "../data";

const FooterParagraphElement = () => {
  const renderFooterParagraphElement = data.footer.copyright.map(({ id, render }) => {
    return (
      <ParagraphElement key={id} render={render} $style={"FooterParagraph"} />
    );
  });

  return (
    <section>
      {renderFooterParagraphElement}
    </section>
  );
};

export default FooterParagraphElement;