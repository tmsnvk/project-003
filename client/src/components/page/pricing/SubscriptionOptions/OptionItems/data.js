import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

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
      to: `/${PROJECT_ROOT}/search`,
      text: "Search now!"
    },
    bottomParagraph: "Start using our service for free!",
    mostPopular: "",
    alternate: false
  },
  {
    optionTitle: "Solo",
    priceIcon: iconList.euroSign,
    priceTag: "24.95 ",
    month: "/ month",
    icon: iconList.angleRight,
    paragraphs: {
      one: "Single registration.",
      two: "Search with full access.",
      three: "Access to communities.",
      four: "Full technical support."
    },
    link: {
      to: `/${PROJECT_ROOT}/pricing/#signupform`,
      text: "Sign me up!"
    },
    bottomParagraph: "30-day money back guarantee.",
    mostPopular: "",
    alternate: false
  },
  {
    optionTitle: "Duo",
    priceIcon: iconList.euroSign,
    priceTag: "39.95 ",
    month: "/ month",
    icon: iconList.angleRight,
    paragraphs: {
      one: "Register together with a buddy.",
      two: "Search with full access.",
      three: "Access to communities.",
      four: "Full technical support."
    },
    link: {
      to: `/${PROJECT_ROOT}/pricing/#signupform`,
      text: "Sign me up!"
    },
    bottomParagraph: "30-day money back guarantee.",
    mostPopular: "Most popular!",
    alternate: true
  },
  {
    optionTitle: "Gym",
    priceIcon: "",
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
      to: `/${PROJECT_ROOT}/contact`,
      text: "Contact us!"
    },
    bottomParagraph: "Contact us for a gym-tailored offer!",
    mostPopular: "",
    alternate: false
  }
];

export default data;