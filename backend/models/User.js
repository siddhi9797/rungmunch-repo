
const mongoose = require("mongoose");
// models/User.js
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthMonth: { type: String, required: true },
  birthYear: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  mobile: { type: String, required: true },
  contactPreference: { type: [String], required: true }, // array for SMS / WhatsApp
  category: { type: String, required: true },
  style: { type: String, required: true }, // if applicable
  participantsCount: { type: Number, required: true },
  ageGroup: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  state: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });



// ===== CONTACT SCHEMA =====
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// ===== EXPORT BOTH MODELS =====
const User = mongoose.model("User", userSchema);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = { User, Contact };