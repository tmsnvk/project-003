const mongoose = require("mongoose");

const SignupFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pokedex: { type: Number, required: true },
  email: { type: String, lowercase: true, required: true },
  phone: { type: Number, required: true },
  radio: { type: String, required: true },
  checkbox: { type: String, required: true }
}, { collection: "signupform" });

module.exports = mongoose.model("SignupForm", SignupFormSchema);