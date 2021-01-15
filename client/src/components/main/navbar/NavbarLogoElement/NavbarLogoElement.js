import React from "react";
import { LinkElement } from "components/shared/link";
import { StyledIcon } from "components/shared/utilities";
import data from "../data";

const NavbarLogoElement = () => {
  return (
    <section>
      <LinkElement
        to={"/"}
        text={<><StyledIcon icon={data.navbar.title.icon} fontsize={"navlogo"} margin={"navlogo"} />{data.navbar.title.text}</>}
        fontsize={"navlogo"}
        letterspacing={"0.1rem"}
        padding={"navlogo"}
      />
    </section>
  );
};

export default NavbarLogoElement;