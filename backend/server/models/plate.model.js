const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const platesSchema = new mongoose.Schema(
  {
    nameplate: {
      type: String,
      required: true,
      unique: true,
    },
    time: {
      type: Number,
      required:true
    },
    portions: {
      type: Number,
      required:true
    },
    procedure: {
      type: Array,
      trim:true,
      required:true
    },
    category: {
      type: ObjectId,
      ref: "Category", // es el modelo a usar
      required:true
    },
    ingredients: {
      type: Array,
      required: true,
      trim:true
    },
    isFavorite: {
      type: Boolean, // si es true se guarda como favorito
      // hacer que me liste los que esten en true
      required:true
    },
    photo: {
      type: String,
      required:true
    },
    region: {
      type: String,
      minlength:[4,'Minimum length'],
      required:true
    },
  },
  { timestamps: true }
);

const Plate = mongoose.model("Plates", platesSchema);

module.exports = Plate;
