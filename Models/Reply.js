const mongoose = require("mongoose");

const replySchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    message: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"messages",
      required:true
    },
  },
  { timestamps: true }
);

const replyModel = mongoose.model("replies", replySchema);
module.exports = replyModel;
