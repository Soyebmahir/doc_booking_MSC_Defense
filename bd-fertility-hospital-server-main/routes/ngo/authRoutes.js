const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../../controllers/ngo/auth.controller");

let authRouter = router;

router.get("/", getAllUsers);

module.exports = authRouter;
