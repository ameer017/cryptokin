const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  phone: String,
  encryptedData: {
    type: String,
    required: true,
  },
  ipfsHash: {
    type: String,
    required: true,
  },
  kins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kin",
    },
  ],
  lastCheckIn: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
