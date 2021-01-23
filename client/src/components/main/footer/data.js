import React from "react";
import { StyledIcon } from "components/shared/utilities";
import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

const currentYear = new Date().getFullYear();

const data = {
  footer: {
    linkIcons: [
      { id: 1, link: `/${PROJECT_ROOT}`, render: <><StyledIcon icon={iconList.facebook} style={"FooterParagraph"} /></> },
      { id: 2, link: `/${PROJECT_ROOT}`, render: <><StyledIcon icon={iconList.twitter} style={"FooterParagraph"} /></> },
      { id: 3, link: `/${PROJECT_ROOT}`, render: <><StyledIcon icon={iconList.instagram} style={"FooterParagraph"} /></> },
      { id: 4, link: `/${PROJECT_ROOT}`, render: <><StyledIcon icon={iconList.youtube} style={"FooterParagraph"} /></> }
    ],
    copyright: [
      { id: 1, render: `\u00A9 2020 - ${currentYear} by tamasnvk` },
      { id: 2, render: "built with \u2764" },
      { id: 3, render: "using react & pokeapi.co" }
    ]
  }
};

export default data;