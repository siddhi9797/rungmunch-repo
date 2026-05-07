const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// ✅ Cloudinary setup
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ✅ Store images in Cloudinary folder
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "rungmunch_images",
    resource_type: "image"
  }
});

const upload = multer({ storage });


// ================= CREATE EVENT =================
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description, language, type } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newEvent = new Event({
      title,
      date,
      description,
      language,
      type,
      image: req.file.path // ✅ Cloudinary URL
    });

    await newEvent.save();

    res.json({
      message: "Event saved successfully",
      imageUrl: req.file.path
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// ================= GET EVENTS =================
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================= DELETE EVENT =================
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // ✅ Extract public_id from Cloudinary URL
    const imageUrl = event.image;
    const publicId = imageUrl.split("/").pop().split(".")[0];

    // ✅ Delete from Cloudinary
    await cloudinary.uploader.destroy(`rungmunch_images/${publicId}`);

    // ✅ Delete from DB
    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Event deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ================= UPDATE EVENT =================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description, language, type } = req.body;

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // ✅ If new image uploaded → delete old one
    if (req.file) {
      const oldPublicId = event.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`rungmunch_images/${oldPublicId}`);
      event.image = req.file.path;
    }

    // ✅ Update fields
    event.title = title;
    event.date = date;
    event.description = description;
    event.language = language;
    event.type = type;

    await event.save();

    res.json({ message: "Event updated successfully", event });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;