import { PROJECT_ROOT } from "utilities/constants/urls";
import iconList from "utilities/icons/iconList";

const data = {
  logo: {
    link: `/${PROJECT_ROOT}`,
    render: {
      icon: iconList.dotCircle,
      text: "CKPD - Your New Home"
    }
  },
  links: [
    { id: 1, link: `/${PROJECT_ROOT}`, render: "Home", altColor: false },
    { id: 2, link: `/${PROJECT_ROOT}/pricing`, render: "Pricing", altColor: true },
    { id: 3, link: `/${PROJECT_ROOT}/search`, render: "Search", altColor: false },
    { id: 4, link: `/${PROJECT_ROOT}/contact`, render: "Contact", altColor: false }
  ]
};

export default data;