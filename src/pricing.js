// import common css styles;
import "./styles/base.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/mediaq.scss";

// import page-specific css styles;
import "./styles/grid_pricing.scss";
import "./styles/page_pricing.scss";

// import fontawesome;
import '@fortawesome/fontawesome-free/js/fontawesome.js'
import '@fortawesome/fontawesome-free/js/solid.js'
import '@fortawesome/fontawesome-free/js/brands.js'

// import js;
import { toggleClass } from "./js/navbar.js"; 
import { getPokemonImage } from "./js/imageholder.js";
import { buttonScroll } from "./js/button.js";

// scrolling;
window.addEventListener("scroll", toggleClass, false);

// to insert random pokemon images into image-holder divs;
getPokemonImage();

// button
buttonScroll();