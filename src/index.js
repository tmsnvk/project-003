// import css styles;
import "./styles/base.scss";
import "./styles/grid_home.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/page_home.scss";
import "./styles/mediaq.scss";

// import fontawesome;
import '@fortawesome/fontawesome-free/js/fontawesome.js'
import '@fortawesome/fontawesome-free/js/solid.js'

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