const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("messages", messageSchema);
module.exports = messageModel;
