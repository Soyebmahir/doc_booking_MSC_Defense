const express = require("express");
const router = express.Router();

const authRoutes = require("./ngo/authRoutes");

let rootRouter = router;

rootRouter.use("/user", authRoutes);

module.exports = rootRouter;
