const getPokemonImage = () => {
 const imageContainers = document.querySelectorAll(".image-holder");

 for (let imageDiv of imageContainers) {
  let pokemonImage = document.createElement("img");
  pokemonImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokemonID()}.png`;
  imageDiv.append(pokemonImage);
 }
}

const pokemonID = (min = 1, max = 151) => {
 return Math.floor(Math.random() * (max - min) + min);
}

export { getPokemonImage };