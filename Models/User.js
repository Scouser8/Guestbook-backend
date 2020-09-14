const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_name: {
    type: "String",
    unique: true,
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  first_name: {
    type: "String",
  },
  last_name: {
    type: "String",
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
