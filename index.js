// import css styles;
import "./styles/base.scss";
import "./styles/grid.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/page_main.scss";
import "./styles/page_post.scss";
import "./styles/mediaq.scss";

// import fontawesome;
import '@fortawesome/fontawesome-free/js/fontawesome.js'
import '@fortawesome/fontawesome-free/js/solid.js'

// import functions;
import { toggleClass } from "./js/navbar.js"; 


window.addEventListener("scroll", toggleClass, false);