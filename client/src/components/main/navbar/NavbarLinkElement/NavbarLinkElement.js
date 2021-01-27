import React from "react";
import { LinkElement } from "components/shared/link";
import data from "../data";

const NavbarLinkElement = () => {
  const renderNavbarLinkElement = data.navbar.links.map(({ id, link, render, style }) => {
    return (
      <LinkElement key={id} to={link} render={render} $style={style} />
    );
  });

  return (
    <nav>
      {renderNavbarLinkElement}
    </nav>
  );
};

export default NavbarLinkElement;