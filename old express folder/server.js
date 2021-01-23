const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const compression = require("compression");

const publicPath = path.join(__dirname, "..", "client/public");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(compression());

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error) => {
  if (error) {
    throw error;
  } else {
    console.log("The application is now connected to mongoDB via moongose.");
  }
});

app.use("/", require("./routes/api/getPokemonData"));
app.use("/", require("./routes/mongodb/signupForm"));
app.use("/", require("./routes/mongodb/contactForm"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', (request, response) => response.sendFile(path.join(__dirname, "client/build", "index.html")));
}

const port = process.env.PORT || 301;
app.listen(port, () => console.log(`The application is listening @ port ${port}!`));