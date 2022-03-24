const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const platesSchema = new mongoose.Schema(
  {
    nameplate: {
      type: String,
      required: [true, "Ingresa el nombre."],
      unique: [true, "ese nombre ya existe!"],
    },
    time: {
      type: Number,
      required: [true, "Ingresa el tiempo de cocción."],
    },
    portions: {
      type: Number,
      required: [true, "Ingresa el número de porciones."],
    },
    procedure: {
      type: Array,
      trim: true,
      required: [true, "Ingresa procedimiento."],
    },
    category: {
      type: ObjectId,
      ref: "Category", // es el modelo a usar
      required: true,
    },
    ingredients: {
      type: Array,
      required: [true, "Ingresa Los ingredientes."],
      trim: true,
    },
    isFavorite: {
      type: Boolean, // si es true se guarda como favorito
      // hacer que me liste los que esten en true
      required: true,
    },
    photo: {
      type: String,
      required: [true, "Ingresa la Url de la imágen."],
    },
    region: {
      type: String,
      minlength: [4, "Minimum length"],
      required: true,
    },
  },
  { timestamps: true }
);

const Plate = mongoose.model("Plates", platesSchema);

module.exports = Plate;
