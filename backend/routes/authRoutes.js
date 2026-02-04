// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User, Contact } = require("../models/User");

// @route   POST /api/auth/register
// @desc    Register a new user
router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      birthMonth,
      birthYear,
      email,
      country,
      mobile,
      contactPreference,
      category,
      style,
      participantsCount,
      ageGroup,
      address,
      city,
      zip,
      state,
      gender,
      password
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      birthMonth,
      birthYear,
      email,
      country,
      mobile,
      contactPreference,
      category,
      style,
      participantsCount,
      ageGroup,
      address,
      city,
      zip,
      state,
      gender,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// @route   POST /api/auth/login
// @desc    Login user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by firstName (username)
    const user = await User.findOne({ firstName: username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Success
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ===== CONTACT FORM SUBMISSION =====
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
