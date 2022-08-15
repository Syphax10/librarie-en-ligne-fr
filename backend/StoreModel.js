const mongoose = require("mongoose");

// Database Schema for Online Store to add data in mongoose

const StoreSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      //Same name title not accepted
      unique: true,
      required: [true, "Title is requied"],
    },
    description: {
      type: String,
    },
    authorName: {
      type: String,
      required: [true, "Author name is requied"],
    },
    language: {
      type: String,
    },
    price: {
      type: String,
      required: [true, "Price is requied"],
    },
    quantity: {
      type: String,
      required: [true, "Quantity is requied"],
    },
    image: {
      type: String,
      required: [true, "Image is requied"],
    },
    status: {
      type: String,
      default: "open",
      enum: ["open", "closed"],
    },
  },
  {
    timestamps: true,
  },
);
// create a model for store Schema and export it using module.exports
const Store = mongoose.model("store", StoreSchema);
module.exports = Store;
