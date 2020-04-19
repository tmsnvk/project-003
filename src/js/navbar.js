// h1 @navbar collapse
const header = document.querySelector("h1");
const headerHeight = header.offsetHeight;

const addClass = () => header.classList.add("heading-transform");
const removeClass = () => header.classList.remove("heading-transform");

const toggleClass = () => {
	let scrollPosition = window.scrollY;

	if (scrollPosition >= headerHeight) { 
  	addClass();
	} else { 
  	removeClass();
	}
}

// export
export { toggleClass };