const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nameCategory: {
      type: String,
      required: true,
      unique: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
