const { Reviews } = require("./reviewModel");

const createReview = async (req, res) => {
  try {
    console.log(req.body);
    const newReview = new Reviews(req.body);
    await newReview.save();
    res.status(200).json({
      message: "Review Posted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getAllReview = async (req, res) => {
  try {
    const result = await Reviews.find();
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(200).json({
      error,
    });
  }
};

module.exports = {
  createReview,
  getAllReview,
};
