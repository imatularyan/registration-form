const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("jsonwebtoken");
require("../db/dbConnect");
const User = require("../model/userSchema");

// Register route
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  try {
    // Check for missing fields
    if (!name || !email || !phone || !password || !cpassword) {
      return res.redirect("/error");
    }

    // Check if the user already exists
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.redirect("/error");
    }

    // Check if passwords match
    if (password !== cpassword) {
      return res.redirect("/error");
    }

    // Create and save the new user
    const user = new User({ name, email, phone, password });
    await user.save();
    return res.redirect("/success");
  } catch (err) {
    // Handle unexpected errors
    console.log(err);
    return res.redirect("/error");
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.redirect("/error");
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        return res.redirect("/error");
      }

      // Generate token only if the credentials are valid
      const token = await userLogin.generateAuthToken();
      console.log(token);

      // Correctly setting the cookie after verifying credentials
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      return res.redirect("/success");
    } else {
      return res.redirect("/error");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("/error");
  }
});

module.exports = router;
