const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EducationSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "admin"
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String
   
  },
  tags: {
    type: [String],
    
  },
  name: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = Education = mongoose.model("education", EducationSchema);
