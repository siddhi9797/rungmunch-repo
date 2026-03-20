// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User, Contact } = require("../models/User");
const multer = require("multer");
const path = require("path");

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
      password,
       mode 
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
      password: hashedPassword,
       mode 
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
    email: user.email,
    mode: user.mode   
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });




router.post("/upload-video", upload.single("video"), async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    // ❌ Not logged in / invalid
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // ❌ Mode check
    if (user.mode !== "Virtual") {
      return res.status(403).json({
        message: "Only virtual users can upload video"
      });
    }

    // ✅ Save video path
    user.video = req.file.path;
    await user.save();

    res.json({ message: "Video uploaded successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
});

module.exports = router;