const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String, 
    minLength: [5, "Name is too short!"],
    maxLength: 30,
    lowercase: true,
    required: true
  },
  pokedex: {
    type: Number,
    minLength: [12, "Your PokedexID is 12 characters long."],
    maxLength: [12, "Your PokedexID is 12 characters long."],
    required: true
  },
  email: {
    type: String,
    maxLength: 30,
    lowercase: true,
    required: true
  },
  phone: {
    type: Number,
    maxLength: 20,
    required: true
  },
  radio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("FormSubmission", FormSchema);

// /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/