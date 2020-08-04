const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const axios = require("axios");

const mongoose = require("mongoose");
const FormSubmission = require("./models/Form");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB database");
});

app.post("/formsignup", async (request, response) => {
  const newForm = new FormSubmission({
    name: request.body.name,
    pokedex: request.body.pokedex,
    email: request.body.email,
    phone: request.body.phone,
    radioOne: request.body.radioOne,
    radioTwo: request.body.radioTwo,
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

// const baseURL = "https://newsapi.org/v2/top-headlines?";
// const country = "country=";
// const category = "category=";
// const apiKey = `apiKey=${process.env.REACT_APP_API_KEY}`;

// app.get("/country/:countryId/category/:categoryId", async (req, res) => {
//   const response = await axios.get(`${baseURL}${country}${req.params.countryId}&${category}${req.params.categoryId}&${apiKey}`);

//   res.send(response.data.articles);
// });

const port = process.env.PORT || 3011;
app.listen(port, () => {
  console.log(`central_kanto_pokemon_database project @ port ${port}!`);
});