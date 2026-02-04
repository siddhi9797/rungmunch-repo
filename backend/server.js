require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes"); // make sure this file exists

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route (ADD THIS HERE)
app.get("/", (req, res) => {
  res.send("Backend is running ");
});

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected "))
  .catch(err => console.log("MongoDB connection error ", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
