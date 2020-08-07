const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pokedex: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  radioSolo: {
    type: String,
    required: true
  },
  radioDuo: {
    type: String,
    required: true
  },
  checkbox: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("FormSubmission", FormSchema);