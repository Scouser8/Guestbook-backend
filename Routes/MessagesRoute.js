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
  console.log("Received");
  const messageToDelete = req.params.id;
  console.log(messageToDelete);
  // Messages.deleteOne({ _id: messageToDelete }, (err, data) => {
  //   if (err) {
  //     res.send("Delete Failed");
  //   } else {
  //     res.send("Deleted");
  //   }
  // });
  res.send("Deleted");
});

module.exports = router;
