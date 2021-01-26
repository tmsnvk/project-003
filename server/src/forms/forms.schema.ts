import * as mongoose from "mongoose";

export const SignupFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pokedex: {
    type: String,
    minlength: 14,
    maxlength: 14,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  radio: {
    type: String,
    enum: ["solo", "duo"],
    required: true
  },
  checkbox: {
    type: Boolean,
    required: true
  }
}, { collection: "signupform" });

export const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pokedex: {
    type: String,
    minlength: 14,
    maxlength: 14,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  textarea: {
    type: String,
    maxlength: 1000,
    required: true
  },
  checkbox: {
    type: Boolean,
    required: true
  }
}, { collection: "contactform" });