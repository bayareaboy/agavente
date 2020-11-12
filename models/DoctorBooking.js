const mongoose = require("mongoose");
const Schema = mongoose.Schema


const BookingSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  genderPreferrence: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

});

module.exports = Booking = mongoose.model("booking", BookingSchema);
