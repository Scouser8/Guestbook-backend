const express = require("express");
const router = express.Router();
const Replies = require("../Models/Reply");

router.get("/", (req, res) => {
  const newMessage = req.body;
  Replies.find({})
    .sort({ createdAt: -1 })
    .exec((err, replies) => {
      if (err) {
        res.send("Couldn't fetch replies.");
      } else {
        res.status(201).send(replies);
      }
    });
});

router.post("/:userId/add", (req, res) => {
  const newReply = req.body;
  Replies.create(newReply, (err, data) => {
    if (err) {
      res.send("Couldn't save reply.");
    } else {
      res.status(201).send("Reply added!");
    }
  });
});

router.put("/:id/edit", (req, res) => {
  const replyToEdit = req.params.id;
  const editedReply = req.body;
  Replies.updateOne({ _id: replyToEdit }, editedReply, () => {
    res.send("Edited");
  });
});

router.delete("/:id/delete", (req, res) => {
  const replyToDelete = req.params.id;
  Replies.deleteOne({ _id: replyToDelete }, (err, data) => {
    if (err) {
      res.send("Delete Failed");
    } else {
      res.send("Reply Deleted");
    }
  });
  //   res.send("Deleted");
});

module.exports = router;
