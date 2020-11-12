const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Doctor = require("../../models/Doctor");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const authDoctor = require("../../middleware/authDoctor");

router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please protect your account with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, password, phone, title, avatar, 
      location, speciality, about, education, license, 
      languages, acceptedInsurance, answers, experience} = req.body;
    // see if user exists
    try {
      let doctor = await Doctor.findOne({ email });
      if (doctor) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // create user instance
      doctor = new Doctor({
        name, email, password, phone, title, avatar, 
      location, speciality, about, education, license, 
      languages, acceptedInsurance, answers, experience
      });
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      doctor.password = await bcrypt.hash(password, salt);

      await doctor.save();
      const payload = {
        doctor: {
          id: doctor.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET api/users
router.get("/", authDoctor, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor.id).select("-password");
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET doctor by id api/doctor/:id
router.get('/:id', authDoctor, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).select("-password");
    if(!doctor){
      return res.status(404).json({msg: 'doctor not found.'})
    }
    res.json(doctor)
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId'){
      return res.status(404).json({msg: 'doctor not found.'})
    }
    res.status(500).send('server error')
  }
})

// route POST api/auth, authenticate the user
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Email or passowrd doesn't match.").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let doctor = await Doctor.findOne({ email });
      if (!doctor) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, doctor.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        doctor: {
          id: doctor.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);




module.exports = router



