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
    },
    portions: {
      type: Number,
    },
    procedure: {
      type: Array,
    },
    category: {
      type: ObjectId,
      ref: "Category", // es el modelo a usar
      // required:true
    },
    ingredients: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    isFavorite: {
      type: Boolean, // si es true se guarda como favorito
      // hacer que me liste los que esten en true
    },
    photo: {
      type: String,
    },
    province: {
      type: String,
    },
  },
  { timestamps: true }
);

const Plates = mongoose.model("Plates", platesSchema);

module.exports = Plates;
