// const Booking = require("./bookingModel");

const { Booking } = require("./bookingModel");

const createBooking = async (req, res) => {
  try {
    const result = await Booking.create(req.body);
    res.status(200).json({
      message: "Booking Posted successfully",
      // data: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
const getAllBooking = async (req, res) => {
  try {
    const result = await Booking.find();
    res.status(200).json({
      message: "Get All Booking",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
const getBookingWithGmail = async (req, res) => {
  try {
    const result = await Booking.find({ patient: req.query.email });
    res.status(200).json({
      message: "Get All Booking",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getBookingWithGmail,
  createBooking,
  getAllBooking,
};
