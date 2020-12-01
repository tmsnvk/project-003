const express = require("express");
const router = express.Router();
const axios = require("axios");
const { regexPokemonDatabase } = require("../../utilities/helpers/regex");

router.get("/pokemon/:pokemonId", async (request, response) => {
  try {
    const { pokemonId } = request.params;

    if (!regexPokemonDatabase.test(pokemonId)) return response.status(400).json({ message: "Enter a valid pokemon NAME or ID." });

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    response.status(200).send({
      name: data.name,
      id: data.id,
      typeOne: data.types[0].type.name,
      typeTwo: data.types[1]?.type.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = router;