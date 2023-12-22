const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Reviews = mongoose.model("Review", reviewSchema);

module.exports = {
  Reviews,
};
