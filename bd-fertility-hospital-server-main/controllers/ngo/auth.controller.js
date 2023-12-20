const { getAllUsersService } = require("../../services/ngo/auth.service");
const { httpResponse } = require("../../utils/httpResponse");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res
      .status(200)
      .json(httpResponse("sucess", "Successfully logged in", users));
  } catch (error) {
    res.status(401).json(httpResponse("fail", error.message, {}));
  }
};
