const mongoose = require("mongoose");
const Event = require("./models/Event"); // adjust path if needed

mongoose.connect("mongodb://127.0.0.1:27017/your_db_name")
  .then(async () => {
    console.log("Connected to DB");

    const result = await Event.deleteMany({
      image: { $not: /^https/ } // ❌ delete Base64
    });

    console.log("Deleted documents:", result.deletedCount);

    mongoose.disconnect();
  })
  .catch(err => console.log(err));