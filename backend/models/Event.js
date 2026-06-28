const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },

  venue: {
    type: String,
    required: true
  },

  description: { type: String, required: true },

  language: {
    type: String,
    enum: ["English", "Marathi", "Hindi"],
    required: true
  },

  type: {
    type: String,
    enum: ["upcoming", "past"],
    required: true
  },

  image: {
    type: String,
    required: true
  }

}, { timestamps: true });