const User = require("../../models/ngo/User");

exports.getAllUsersService = async () => {
  const users = await User.find({});

  return users;
};
