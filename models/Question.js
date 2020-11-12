const mongoose = require("mongoose");
const Schema = mongoose.Schema

const QuestionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    
  },
  answers: [
    {
      doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctor"
      },
      text: {
        type: String,
        required: true
      },
      title: {
        type: String,
        
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = Question = mongoose.model("question", QuestionSchema);
