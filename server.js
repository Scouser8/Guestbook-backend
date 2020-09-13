const express = require("express");
const mongoose = require("mongoose");

//Create a new app & define its port or take it from the environment variables.
const app = express();
const port = process.env.PORT || 8999;

//DB config
const mongo_connectionURL =
  "mongodb+srv://admin:hEYX5Ww7fqcICAK1@cluster0.d5jki.mongodb.net/tiktok?retryWrites=true&w=majority";

//Connect to the database
mongoose.connect(mongo_connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Middlewares
app.use(express.json());

//Start the server listening on the above determined port.
app.listen(port, () => console.log(`Server running locally on port: ${port}`));
