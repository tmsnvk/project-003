const express = require("express");
const router = express.Router();
const SignupForm = require("../../models/SignupForm");

router.post("/signupform", async (request, response) => {
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

module.exports = router;