const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {
    type: String, // You might want to use a Date type if you plan to perform date-related queries
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  treatmentId: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = {
  Booking,
};
