const express = require("express");
const router = express.Router();
const Users = require("../Models/User");

router.post("/login", (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  res.send(req.body);
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  Users.create(newUser, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("New user created successfully.");
    }
  });
});

module.exports = router;
