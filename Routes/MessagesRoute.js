const express = require("express");
const router = express.Router();
const Messages = require("../Models/Message");

router.get("/", (req, res) => {
  const newMessage = req.body;
  Messages.find({}, (err, messages) => {
    if (err) {
      res.send("Couldn't fetch message.");
    } else {
      res.status(201).send(messages);
    }
  });
});

router.post("/:userId/add", (req, res) => {
  const newMessage = req.body;
  Messages.create(newMessage, (err, data) => {
    if (err) {
      res.send("Couldn't save message.");
    } else {
      res.status(201).send("Message added!");
    }
  });
});

router.put("/:id/edit", (req, res) => {
  const messageToEdit = req.params.id;
  const editedMsg = req.body;
  Messages.updateOne({ _id: messageToEdit }, editedMsg, () => {
    res.send("Edited");
  });
});

router.delete("/:id/delete", (req, res) => {
  const messageToDelete = req.params.id;
  Messages.deleteOne({ _id: messageToDelete }, () => {
    res.send("Message deleted.");
  });
});

module.exports = router;
