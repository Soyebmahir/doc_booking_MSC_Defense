const express = require("express");
const {
  createUser,
  logInUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  makeUserToAdmin,
  makeAdminToUser,
  searchUsers,
} = require("./userController");
const router = express.Router();

router.post("/createUser", createUser);
router.post("/login", logInUser);
router.get("/getAllUser", getAllUser);
router.get("/getSingleUser/:email", getSingleUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/makeAdmin/:id", makeUserToAdmin);
router.put("/makeUser/:id", makeAdminToUser);
router.get("/search/:searchQuery", searchUsers);

module.exports = router;
