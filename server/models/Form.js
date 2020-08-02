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
    maxLength: 15,
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
  dropdown: {
    enum: ["Solo", "Duo"]
  }
});

module.exports = mongoose.model("FormSubmission", FormSchema);