const mongoose = require("mongoose");
const Schema = mongoose.Schema

const LiveStreamSchema = new mongoose.Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "doctor"
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  streamTime: {
    type: String,
    required: true,
  },

});

module.exports = LiveStream = mongoose.model("liveStream", LiveStreamSchema);
