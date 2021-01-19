import React from "react";
import { StyledIcon } from "components/shared/utilities";
import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

const data = {
  navbar: {
    logo: <><StyledIcon icon={iconList.dotCircle} style={"NavbarLogoElement_StyledIcon"} />CKPD - Your New Home</>,
    links: [
      { id: 1, link: `/${PROJECT_ROOT}/`, render: "Home", style: "NavbarLinkElement_LinkElement" },
      { id: 2, link: `/${PROJECT_ROOT}/pricing`, render: "Pricing", style: "NavbarLinkElement_LinkElement_Alternate" },
      { id: 3, link: `/${PROJECT_ROOT}/search`, render: "Search", style: "NavbarLinkElement_LinkElement" },
      { id: 4, link: `/${PROJECT_ROOT}/contact`, render: "Contact", style: "NavbarLinkElement_LinkElement" }
    ],
  }
};

export default data;