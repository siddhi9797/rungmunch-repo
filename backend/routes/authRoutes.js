const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User, Contact } = require("../models/User");

// ✅ Cloudinary imports (TOP)
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ✅ Storage config
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "rungmunch_videos",
    resource_type: "video"
  }
});

const upload = multer({ storage });


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { email, password, mode, ...rest } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      ...rest,
      email,
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


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ firstName: username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

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
    res.status(500).json({ message: "Server error" });
  }
});


// ================= VIDEO UPLOAD =================
router.post("/upload-video", upload.single("video"), async (req, res) => {
  try {
    console.log("FILE:", req.file);
console.log("BODY:", req.body);
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.mode !== "Virtual") {
      return res.status(403).json({
        message: "Only virtual users can upload video"
      });
    }

    // ✅ Save Cloudinary URL
    user.video = req.file.path;
    await user.save();

    res.json({
      message: "Video uploaded successfully",
      url: req.file.path
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
});

module.exports = router;