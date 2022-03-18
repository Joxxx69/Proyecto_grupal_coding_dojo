const mongoose = require('mongoose');




const platosSchema = new mongoose.Schema({
    nameplato:{
        type:String,
        require:true,
        unique:true
    },
    time:{
        type:Number,
        require: true,
    },
    ingredientes:{
        type:Array,
        require:true
    },
    isFavorite:{
        type:Boolean  // si es true se guarda como favorito
        // hacer que me liste los que esten en true
    },
    photo:{
        type:String,
        required:true
    },
    province:{
        type:String
    }
},{})






