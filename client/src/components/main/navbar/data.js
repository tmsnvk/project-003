import React from "react";
import { StyledIcon } from "components/shared/utilities";
import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

const data = {
  navbar: {
    logo: <><StyledIcon icon={iconList.dotCircle} $style={"NavbarLogo"} />CKPD - Your New Home</>,
    links: [
      { id: 1, link: `/${PROJECT_ROOT}`, render: "Home", style: "NavbarLink" },
      { id: 2, link: `/${PROJECT_ROOT}/pricing`, render: "Pricing", style: "NavbarLink_Alternate" },
      { id: 3, link: `/${PROJECT_ROOT}/search`, render: "Search", style: "NavbarLink" },
      { id: 4, link: `/${PROJECT_ROOT}/contact`, render: "Contact", style: "NavbarLink" }
    ],
  }
};

export default data;