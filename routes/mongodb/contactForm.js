const express = require("express");
const router = express.Router();
const ContactForm = require("../../models/ContactForm");

router.post("/contactform", async (request, response) => {
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

module.exports = router;