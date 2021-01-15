import React from "react";
import { LinkElement } from "components/shared/link";
import { StyledIcon } from "components/shared/utilities";
import data from "../data";

const FooterLinkElement = () => {
  const renderFooterLinkElement = data.footer.linkIcons.map(({ id, link, icon }) => {
    return (
      <LinkElement
        key={id}
        to={link}
        render={<><StyledIcon icon={icon} color={"grayLight"} margin={"footerlinks"} /></>}
        hover={"grayLight"}
        opacity={"0.7"}
        padding={"footerlinks"}
      />
    );
  });

  return (
    <section>
      {renderFooterLinkElement}
    </section>
  );
};

export default FooterLinkElement;