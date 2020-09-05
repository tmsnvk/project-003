const getPokemonId = (min = 1, max = 151) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const componentData = [
  {
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    id: 1
  },
  {
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    id: 2
  },
  {
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    id: 3
  },
  {
    url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
    id: 4
  }
];

export default componentData;