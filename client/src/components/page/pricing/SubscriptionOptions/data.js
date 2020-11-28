import iconList from "utilities/iconList/iconList";

const data = [
  {
    optionTitle: "Free",
    priceIcon: iconList.euroSign,
    priceTag: "0",
    month: "",
    icon: iconList.angleRight,
    paragraphs: {
      one: "Free without registration.",
      two: "Search with limited access.",
      three: "No access to communities.",
      four: "Limited support."
    },
    link: {
      to: "/search",
      text: "Search now!"
    },
    bottomParagraph: "",
    mostPopular: null,
    alternate: false
  },
  {
    optionTitle: "Solo",
    priceIcon: iconList.euroSign,
    priceTag: "24.95",
    month: "/ month",
    icon: iconList.angleRight,
    paragraphs: {
      one: "Single registration.",
      two: "Search with full access.",
      three: "Access to communities.",
      four: "Full technical support."
    },
    link: {
      to: "/pricing/#signupform",
      text: "Sign me up!"
    },
    bottomParagraph: "30-day money back guarantee.",
    mostPopular: null,
    alternate: false
  },
  {
    optionTitle: "Duo",
    priceIcon: iconList.euroSign,
    priceTag: "39.95",
    month: "/ month",
    icon: iconList.angleRight,
    paragraphs: {
      one: "Register together with a buddy.",
      two: "Search with full access.",
      three: "Access to communities.",
      four: "Full technical support."
    },
    link: {
      to: "/pricing/#signupform",
      text: "Sign me up!"
    },
    bottomParagraph: "30-day money back guarantee.",
    mostPopular: "Most popular!",
    alternate: true
  },
  {
    optionTitle: "Gym",
    priceIcon: null,
    priceTag: "Gym tailored! *",
    month: "",
    icon: iconList.angleRight,
    paragraphs: {
      one: "* Contact us for further details!",
      two: "* Fee based on gym size.",
      three: "* Access to special features.",
      four: "* Dedicated support agent."
    },
    link: {
      to: "/contact",
      text: "Contact us!"
    },
    bottomParagraph: "30-day money back guarantee.",
    mostPopular: null,
    alternate: false
  }
];

export default data;