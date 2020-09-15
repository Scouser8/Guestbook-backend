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

// To prevent sending the password when returning
// the user object to the client.
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
