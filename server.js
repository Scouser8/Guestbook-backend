const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create a new app & define its port or take it from the environment variables
// in case of deployment.
const app = express();
const port = process.env.PORT || 8999;

//DB config
const mongo_connectionURI =
  "mongodb+srv://madel96:qjbt4zuNzh47EgW@guestbook.csxxl.mongodb.net/guestbookDB?retryWrites=true&w=majority";

//Connect to the database
mongoose
  .connect(mongo_connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

//Middlewares
app.use(bodyParser.json());

// app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//Body Parser
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./Routes/UsersRoute.js"));
// app.use("/message", require("./Routes/MessagesRoute"));

//Start the server listening on the above determined port.
app.listen(port, () => console.log(`Server running locally on port: ${port}`));
