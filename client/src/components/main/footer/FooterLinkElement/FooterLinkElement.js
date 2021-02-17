import React from "react";
import LinkElement from "./LinkElement";
import data from "../data";

const FooterLinkElement = () => {
  const renderFooterLinkElement = data.linkIcons.map(({ id, link, icon }) => {
    return (
      <LinkElement key={id} link={link} icon={icon} />
    );
  });

  return (
    <section>
      {renderFooterLinkElement}
    </section>
  );
};

export default FooterLinkElement;