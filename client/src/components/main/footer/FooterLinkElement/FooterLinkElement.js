import React from "react";
import { LinkElement } from "components/shared/link";
import data from "../data";

const FooterLinkElement = () => {
  const renderFooterLinkElement = data.footer.linkIcons.map(({ id, link, render }) => {
    return (
      <LinkElement key={id} to={link} render={render} $style={"FooterLink"} />
    );
  });

  return (
    <section>
      {renderFooterLinkElement}
    </section>
  );
};

export default FooterLinkElement;