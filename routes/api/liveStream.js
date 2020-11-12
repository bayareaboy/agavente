const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const LiveStream = require("../../models/LiveStream");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const auth = require("../../middleware/auth");
const authDoctor = require("../../middleware/authDoctor");


router.post('/', authDoctor, async (req, res) => {
  const {description, streamTime, link, title} = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const doctor = await Doctor.findById(req.doctor.id).select('-password')

    const newStream = new LiveStream ({
      doctor: req.doctor.id,
      description: description,
      streamTime: streamTime,
      link: link,
      title: title,


    })
    const stream = await newStream.save()
    res.json(stream)

  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }


})

// GET all streams
router.get('/', auth, async (req, res) => {
  try {
    const streams = await LiveStream.find().sort({date: -1});
    res.json(streams)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})




module.exports = router