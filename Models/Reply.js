const mongoose = require("mongoose");

const replySchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    message_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
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

const replyModel = mongoose.model("replies", replySchema);
module.exports = replyModel;
