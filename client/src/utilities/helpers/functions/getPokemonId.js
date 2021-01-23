const getPokemonId = (min = 1, max = 151) => Math.floor(Math.random() * (max - min) + min);

export default getPokemonId;