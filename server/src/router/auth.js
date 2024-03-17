const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("jsonwebtoken");
require("../db/dbConnect");
const User = require("../model/userSchema");

// Register route
router.post("/register", async (req, res) => {
  const { name, username, email, password, cpassword } = req.body;

  try {
    // Check for missing fields
    if (!name || !username || !email || !password || !cpassword) {
      return res
        .status(422)
        .json({ error: "Please! fill all the required fields." });
    }

    // Check if the user already exists
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({
        error: "Registration failed. Check details or reset your password.",
      });
    }

    // Check if passwords match
    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Passwords do not match. Please try again." });
    }

    // Create and save the new user
    const user = new User({ name, username, email, password });
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Your account has been created successfully. Welcome aboard!",
    });
  } catch (err) {
    // Handle unexpected errors
    console.log(err);
    return res.status(500).json({
      error:
        "Oops! Something went wrong on our end. Please try refreshing the page or come back later. We're working to fix this as quickly as possible.",
    });
  }
});

// Login route
router.post("/signin", async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both username or email and password." });
    }

    // Check the provided identifier is an email or username
    const userLogin = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        return res
          .status(401)
          .json({ error: "Invalid login credentials. Please try again." });
      }

      // Generate token only if the credentials are valid
      const token = await userLogin.generateAuthToken();
      console.log(token);

      // Correctly setting the cookie after verifying credentials
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      return res.json({ message: "Login successful. Welcome back!" });
    } else {
      // This keeps the error response consistent with the above password mismatch
      return res
        .status(401)
        .json({ error: "Invalid login credentials. Please try again." });
    }
  } catch (err) {
    console.log(err);
    // Keeping the message friendly and encouraging the user to try again
    return res.status(500).json({
      error:
        "We're experiencing some issues. Please try logging in again later.",
    });
  }
});

module.exports = router;
