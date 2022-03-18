const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nameCategory:{
        type:String,
        required:true,
        unique:true
    },
    photoUrl:{
        type:String,
        required:true
    }
},{timestamps:true});


const Plato = Mongoose.modele('plato', platosSchema);












