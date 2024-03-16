const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./src/db/dbConnect");
const bodyParser = require("body-parser");
const User = require("./src/model/userSchema");
const port = process.env.PORT || 3000;
const authRouter = require("./src/router/auth"); // Import auth router

// Serve static files from the "public" directory
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.use(authRouter); // Use the auth router

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/html/success.html");
});

app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/public/html/error.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/html/login.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on -> http://localhost:${port}/`);
});
