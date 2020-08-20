const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const axios = require("axios");

const mongoose = require("mongoose");
const SignupForm = require("./models/SignupForm");
const ContactForm = require("./models/ContactForm");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB database");
});

app.get('/favicon.ico', (request, response) => response.status(204));

app.post("/signupform", async (request, response) => {
  const newForm = new SignupForm({
    name: request.body.name,
    pokedex: request.body.pokedex,
    email: request.body.email,
    phone: request.body.phone,
    radio: request.body.radio,
    checkbox: request.body.checkbox
  });
  
  try {
    const savedForm = await newForm.save();
    response.json(savedForm);
  } catch (error) {
    response.json(error);
    console.log(error);
  }
});

app.post("/contactform", async (request, response) => {
  const newForm = new ContactForm({
    name: request.body.name,
    pokedex: request.body.pokedex,
    email: request.body.email,
    textarea: request.body.textarea,
    checkbox: request.body.checkbox
  });
  
  try {
    const savedForm = await newForm.save();
    response.json(savedForm);
  } catch (error) {
    response.json(error);
    console.log(error);
  }
});

// app.get("/pokemonnames", async (request, response) => {
//   try {
//     const getPokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
//     response.send(getPokemonData.data);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/pokemon/:pokeId", async (request, response) => {
  try {
    const getPokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${request.params.pokeId}`);
    response.send(getPokemonData.data);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3011;
app.listen(port, () => {
  console.log(`central_kanto_pokemon_database project @ port ${port}!`);
});