const mongoose = require('mongoose');

const platesSchema = new mongoose.Schema({
    nameplato:{
        type:String,
        required:true,
        unique:true
    },
    time:{
        type:Number,
        required: true,
    },
    ingredientes:{
        type:Array,
        required:true
    },
    procedure:{
        type:Array,
        required:true
    },
    isFavorite:{
        type:Boolean  // si es true se guarda como favorito
        // hacer que me liste los que esten en true
    },
    photo:{
        type:String,
    },
    province:{
        type:String
    }
},{})



const Plates = mongoose.model('Plates', platesSchema);

module.exports = Plates;




