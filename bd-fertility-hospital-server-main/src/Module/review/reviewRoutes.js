const express = require("express");

const { getAllReview, createReview } = require("./reviewController");

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReview);

module.exports = router;
