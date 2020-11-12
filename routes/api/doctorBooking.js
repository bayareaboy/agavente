const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Booking = require("../../models/DoctorBooking");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const auth = require("../../middleware/auth");


router.post('/', auth, async (req, res) => {
  const {description, time, genderPreferrence, location} = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password')

    const newBooking = new Booking ({
      user: req.user.id,
      description: description,
      time: time,
      genderPreferrence: genderPreferrence,
      location: location,


    })
    const booking = await newBooking.save()
    res.json(booking)

  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }


})



module.exports = router