import React from "react";
import LinkElement from "./LinkElement";
import data from "../data";

const NavbarLinkElement = () => {
  const renderNavbarLinkElement = data.links.map(({ id, link, render, altColor }) => {
    return (
      <LinkElement key={id} link={link} render={render} altColor={altColor} />
    );
  });

  return (
    <nav>
      {renderNavbarLinkElement}
    </nav>
  );
};

export default NavbarLinkElement;