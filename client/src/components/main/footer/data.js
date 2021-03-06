import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

const currentYear = new Date().getFullYear();

const data = {
  linkIcons: [
    { id: 1, link: `/${PROJECT_ROOT}`, icon: iconList.facebook },
    { id: 2, link: `/${PROJECT_ROOT}`, icon: iconList.twitter },
    { id: 3, link: `/${PROJECT_ROOT}`, icon: iconList.instagram },
    { id: 4, link: `/${PROJECT_ROOT}`, icon: iconList.youtube }
  ],
  copyright: [
    { id: 1, render: `\u00A9 2020 - ${currentYear} by tamasnvk` },
    { id: 2, render: "built with \u2764" },
    { id: 3, render: "using react & pokeapi.co" }
  ]
};

export default data;