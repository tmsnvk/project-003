const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB database");
});

app.use("/", require("./routes/mongodb/signupForm"));
app.use("/", require("./routes/mongodb/contactForm"));
app.use("/", require("./routes/api/getPokemonData"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 3011;
app.listen(port, () => {
  console.log(`central_kanto_pokemon_database project @ port ${port}!`);
});