const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userShchema = mongoose.Schema({
  name: {
    type: String,
    require: String,
  },
  email: {
    type: String,
    require: String,
  },
  password: {
    type: String,
    require: String,
  },
  photo: {
    type: String,
    require: String,
  },
  role: {
    type: String,
  },
});

userShchema.pre("save", async function (next) {
  const slat = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, slat);
  next();
});

// userShchema.post("save", function (doc, next) {
//   console.log(doc.password.trim() === "");

//   next();
// });

const Users = mongoose.model("User", userShchema);

module.exports = {
  Users,
};
