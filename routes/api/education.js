const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const passport = require("passport");
const { check, validationResult } = require("express-validator");
const authAdmin = require("../../middleware/authAdmin");
const Admin = require("../../models/Admin");
const Education = require("../../models/Education");


// POST education api/education
router.post(
  "/",
  [
    authAdmin,
  [
    check("title", "Please fill the title field.")
      .not()
      .isEmpty(),
    check("text", "Please fill the text field.")
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
      const admin = await Admin.findById(req.admin.id).select('-password')

      const newEducation = new Education ({
        title: req.body.title,
        text: req.body.text,
        link: req.body.link,
        tags: req.body.tags,
        name: admin.name,
        admin: req.admin.id
      })
      const education = await newEducation.save()
      res.json(education)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error')
    }

  }
);

// GET  id api/education/:id
router.get('/:id', authAdmin, async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if(!education){
      return res.status(404).json({msg: 'education not found.'})
    }
    res.json(education)
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId'){
      return res.status(404).json({msg: 'education not found.'})
    }
    res.status(500).send('server error')
  }
})

// GET all educations
router.get('/', authAdmin, async (req, res) => {
  try {
    const educations = await Education.find().sort({date: -1});
    res.json(educations)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})





module.exports = router;
