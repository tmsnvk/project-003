import React from "react";
import { LinkElement } from "components/shared/link";
import data from "../data";

const NavbarLinkElement = () => {
  const renderNavbarLinkElement = data.navbar.links.map(({ color, id, link, render }) => {
    return (
      <LinkElement
        key={id}
        to={link}
        render={render}
        color={color}
        fontsize={"navlinks"}
        hover={"nohover"}
        letterspacing={"0.2rem"}
        padding={"navlinks"}
      />
    );
  });

  return (
    <section>
      {renderNavbarLinkElement}
    </section>
  );
};

export default NavbarLinkElement;