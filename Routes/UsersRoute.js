const express = require("express");
const router = express.Router();
const Users = require("../Models/User");
const bcrypt = require("bcrypt");

//Create a new user
router.post("/register", (req, res) => {
  const newUser = req.body;
  console.log(newUser.password);

  Users.findOne(
    { $or: [{ user_name: newUser.user_name }, { email: newUser.email }] },
    (err, user) => {
      if (err) throw err;
      else if (user) {
        res.send("Username or email already exists");
      } else {
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //   if(Users.find({password: hash}))
            console.log(Users.find({ password: hash }));
            newUser.password = hash;

            console.log(`Hashed password: ${newUser.password}`);

            Users.create(newUser, (err, data) => {
              if (err) {
                res.status(500).send("Error");
              } else {
                res.status(201).send("New user created successfully");
              }
            });
          })
        );
      }
    }
  );
});

//Authenticate user
router.post("/login", (req, res) => {
  const userData = req.body;

  Users.findOne({ user_name: userData.user_name }, (err, user) => {
    if (err) throw err;
    else if (!user) {
      res.send("bad user");
    } else {
      bcrypt.compare(userData.password, user.password, (err, isMatched) => {
        if (err) {
          console.log("Error");
          throw err;
        }
        if (isMatched) {
          console.log("Logged In");
          res.status(201).send(user);
        } else {
          console.log("Failed");
          res.send("Wrong Password");
        }
      });
    }
  });
});

module.exports = router;
