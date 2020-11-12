const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const passport = require("passport");
const Question = require("../../models/Question");
const { check, validationResult } = require("express-validator");
// const question = require("../../validation/question");
const auth = require("../../middleware/auth");
const authDoctor = require("../../middleware/authDoctor");
const User = require("../../models/User");
const Doctor = require("../../models/Doctor");




// Post model

// Validation
// const validatePostInput = require("../../validation/question");

// router.get("/", (req, res) => {
//   Question.find()
//     .sort({ date: -1 })
//     .then(questions => res.json(questions))
//     .catch(err => res.status(404).json({ noquestionsfound: "No questions found." }));
// });


router.post(
  "/",
  [
    auth,
  [
    check("title", "Please fill the title field.")
      .not()
      .isEmpty(),

    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password')

      const newQuestion = new Question ({
        title: req.body.title,
        name: user.name,
        user: req.user.id
      })
      const question = await newQuestion.save()
      res.json(question)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error')
    }

  }
);

// GET  id api/questions/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if(!question){
      return res.status(404).json({msg: 'Question not found.'})
    }
    res.json(question)
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId'){
      return res.status(404).json({msg: 'Question not found.'})
    }
    res.status(500).send('server error')
  }
})

// GET all questions
router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find().sort({date: -1});
    res.json(questions)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})

// @route POST api/questions/answer/:id
// Private route
router.post(
  "/answer/:id",
  [
    authDoctor,
  [
    check("text", "Please answer the question.")
      .not()
      .isEmpty(),

    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const doctor = await Doctor.findById(req.doctor.id).select('-password')
      const question = await Question.findById(req.params.id);

      const {name, title, avatar} = doctor
      const newAnswer = {
        text: req.body.text,
        name: name,
        doctor: req.doctor.id,
        title: title,
        avatar: avatar
      }

      question.answers.unshift(newAnswer)
      await question.save()
      res.json(question.answers)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error')
    }

  }
);


module.exports = router;
