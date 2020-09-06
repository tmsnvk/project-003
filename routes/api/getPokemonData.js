const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/pokemon/:pokeId", async (request, response) => {
  try {
    const getPokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${request.params.pokeId}`);
    response.send(getPokemonData.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;