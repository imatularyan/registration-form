const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const databaseName = "registrationDB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.cklpl3g.mongodb.net/${databaseName}`
);
// registration schema
const registrationSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// schema model
const Registration = mongoose.model("user", registrationSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUserData = await Registration.findOne({ email: email });
    if (!existingUserData) {
      const registrationData = new Registration({
        username,
        email,
        password,
      });

      await registrationData.save();
      res.redirect("/success");
    } else {
      console.log("Email already exist!");
      res.redirect("/error");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/error");
  }
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/html/success.html");
});

app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/public/html/error.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on -> http://localhost:${port}/`);
});
