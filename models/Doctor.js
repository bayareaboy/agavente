const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DoctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  avatar: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  speciality: {
    type: [String],
    // required: true,
  },
  about: {
    type: String,
    // required: true,
  },
  education: {
    type: [String],
    // required: true,
  },
  license: {
    type: [String],
    // required: true,
  },
  languages: {
    type: [String],
    // required: true,
  },
  acceptedInsurance: {
    type: [String],
    // required: true,
  },
  answers: {
    type: [String],
    // required: true,
  },
  experience: {
    type: [String],
    // required: true,
  },

});

module.exports = Doctor = mongoose.model("doctor", DoctorSchema);
