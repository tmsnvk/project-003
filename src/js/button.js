// function -
// (1) - adding adding/removing active class for button;
// (2) - smooth scrolling to top;
const btn = document.querySelector(".btn");

const buttonScroll = () => {
 window.addEventListener("scroll", addButton);
 btn.addEventListener("click", scrollToTop);
};

const addButton = () => {
 if (window.pageYOffset > 800) {
   btn.classList.remove("no-show");
 } else {
   btn.classList.add("no-show");
 }
};

const scrollToTop = () => {
 btn.addEventListener("click", function() {
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 });
};

export { buttonScroll };