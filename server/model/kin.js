const mongoose = require("mongoose");

const kinSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fullName: {
    type: String,
    required: true,
  },
  email: String,
  phone: String,
  relation: String,
});

const Kin = mongoose.model("Kin", kinSchema);

module.exports = Kin;
