import iconList from "utilities/icons/iconList";

const data = {
  navbar: {
    title: "CKPD - Your New Home",
    links: [
      {
        id: 1,
        link: "/",
        text: "Home",
        color: undefined
      },
      {
        id: 2,
        link: "/pricing",
        text: "Pricing",
        color: "orangeDark"
      },
      {
        id: 3,
        link: "/search",
        text: "Search",
        color: undefined
      },
      {
        id: 4,
        link: "/contact",
        text: "Contact",
        color: undefined
      }
    ],
  },
  footer: {
    linkIcons: [
      {
        id: 1,
        link: "/",
        icon: iconList.facebook
      },
      {
        id: 2,
        link: "/",
        icon: iconList.twitter
      },
      {
        id: 3,
        link: "/",
        icon: iconList.instagram
      },
      {
        id: 4,
        link: "/",
        icon: iconList.youtube
      }
    ],
    copyright: [
      {
        id: 1,
        text: "\u00A9 2020 - 2021 by tamasnvk"
      },
      {
        id: 2,
        text: "built with \u2764"
      },
      {
        id: 3,
        text: "using react & pokeapi.co"
      }
    ]
  }
};

export default data;