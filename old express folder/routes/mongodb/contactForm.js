const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const ContactForm = require("../../models/contactFormModel");
const { regexEmail, regexName, regexPokedex } = require("../../utilities/helpers/regex");

router.post("/contactform", async (request, response) => {
  try {
    const { name, pokedex, email, textarea, checkbox } = request.body;

    if (name === "" || pokedex === "" || email === "" || textarea === "" || !checkbox) return response.status(400).json({ message: "Enter all fields!" });

    if (!regexName.test(name)) return response.status(400).json({ message: "Enter only letters." });

    if (name.length < 4 || name.length > 40) return response.status(400).json({ message: "Enter a number of characters between 4 and 40." });

    if (!regexPokedex.test(pokedex)) return response.status(400).json({ message: "Enter only numbers." });

    if (pokedex.length !== 14) return response.status(400).json({ message: "Enter exactly 14 characters." });

    if (!regexEmail.test(email)) return response.status(400).json({ message: "Enter a valid email address." });

    if (textarea === "") return response.status(400).json({ message: "Enter your message." });

    const newForm = new ContactForm({
      name: name,
      pokedex: pokedex,
      email: email,
      textarea: textarea,
      checkbox: checkbox
    });

    await newForm.save();

    const output = `
      <main>
        <h1>Hi there, ${name}!</h1>
        <h2>We have received your contact request from this [${email}] email address.</h2>
        <h3>Form Details</h3>
        <div>
          <p>Name: <span>${name}</span></p>
          <p>Pokedex ID: <span>${pokedex}</span></p>
          <p>Email: <span>${email}</span></p>
          <p>Message: <span>${textarea}</span></p>
        </div>
        <br />
        <h3>Thank you for submitting your request. One of our customer agents will get back to you as soon as possible!</h3>
      </main>
    `;

    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_AUTH_HOST,
      port: 465,
      secure: true,
      auth: { user: process.env.NODEMAILER_AUTH_USER, pass: process.env.NODEMAILER_AUTH_PASS },
      tls: { rejectUnauthorized: false }
    });

    let mailOptions = {
      from: process.env.NODEMAILER_AUTH_USER,
      to: email,
      bcc: process.env.NODEMAILER_AUTH_USER,
      subject: "Received Your Contact Request",
      text: null,
      html: output
    };

    transporter.sendMail(mailOptions);

    return response.status(200).json({ message: "OK - form is submitted & email is sent!" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = router;