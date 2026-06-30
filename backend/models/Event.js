const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      enum: ["English", "Marathi", "Hindi"],
      required: true,
    },

    type: {
      type: String,
      enum: ["upcoming", "past"],
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    shows: {
      type: [showSchema],
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one show is required.",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);