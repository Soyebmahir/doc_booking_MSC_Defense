const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBookingWithGmail,
} = require("./bookingController");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getAllBooking);
router.get("/patient", getBookingWithGmail);

module.exports = router;
