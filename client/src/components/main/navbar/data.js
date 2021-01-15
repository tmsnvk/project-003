import iconList from "utilities/icons/iconList";

const data = {
  navbar: {
    title: {
      text: "CKPD - Your New Home",
      icon: iconList.dotCircle
    },
    links: [
      { id: 1, link: "/", render: "Home", color: null },
      { id: 2, link: "/pricing", render: "Pricing", color: "orangeDark" },
      { id: 3, link: "/search", render: "Search", color: null },
      { id: 4, link: "/contact", render: "Contact", color: null }
    ],
  }
};

export default data;