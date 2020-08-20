const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pokedex: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  textarea: {
    type: String,
    required: true
  },
  checkbox: {
    type: String,
    required: true
  }
}, { collection: "contactform" });

module.exports = mongoose.model("ContactForm", ContactFormSchema);