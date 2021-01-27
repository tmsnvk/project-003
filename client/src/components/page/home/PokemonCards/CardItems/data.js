import getPokemonId from "utilities/helpers/functions/getPokemonId";

const data = [
  {
    id: 1,
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    alt: "random pokemon image"
  },
  {
    id: 2,
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    alt: "random pokemon image"
  },
  {
    id: 3,
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    alt: "random pokemon image"
  },
  {
    id: 4,
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    alt: "random pokemon image"
  }
];

export default data;