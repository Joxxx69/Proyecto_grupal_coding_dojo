const Plate = require("../models/plate.model");
const _ = require('lodash')

/// para verle todos como hacer este controlor

//random  ---santiago
const randomPlate = (req, res) => {
  const { ing1, ing2, ing3 } = req.params;
  // sample me genera uno doucmento aleatorio y all hace coincidan todos los elementos.
  Plate.aggregate([{ $match: { ingredients: { $all: [ing1, ing2, ing3] } } },{$lookup:{from:'categories', localField:'category',foreignField:'_id', as:'category'}}])
    .sample(1)
    .then(plateRandom =>{
      // el condicional me devuelve un plato aleatorio en caso que ninguno de los ingredientes coincidan con "$all"
      // el platon aleatorio sera generado con "$in"
      console.log('1')
      // se utiliza lodash para saber si tengo un objeto vacio
      if(_.isEmpty(plateRandom)){
        console.log('2')
        Plate.aggregate([{ $match: { ingredients: { $in: [ing1, ing2, ing3] } } },{$lookup:{from:'categories', localField:'category',foreignField:'_id', as:'category'}}])
        .sample(1)
        .then(plate => res.json(plate)) 
        .catch(err => console.log(err))
      }else{
        res.json(plateRandom);
      }
    })
    .catch(err => console.log(err));
};

// deleteOne --- Ernesto
const deletePlate = (request, response) => {
  Plate.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

//create  --- Jean Pierre 
const createPlate = (req, res) => {
  const { nameplate, time, portions, procedure, category, ingredients, isFavorite, photo, region } = req.body;
  const newPlate = new Plate({ nameplate, time, portions, procedure, category, ingredients, isFavorite, photo, region });

  // newPlate.procedure = procedure.split(';');

  newPlate.save()
    .then((plate) => res.json(plate))
    .catch((err) => console.log("there was an error", err));
};

//update --- Ernesto
const updatePlate = (request, response) => {
  Plate.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updatePlate) => response.json(updatePlate))
    .catch((err) => response.status(400).json(err));
};
//getOne -- Jean Pierre
const getPlateById = (req, res) => {
  const {id}= req.params;
  Plate.findById(id)
    .populate('category')
    .then((plate) => res.json(plate))
    .catch((err) => res.status(400).json(err));
};

//getAll -- jean pirre
const getAll = (req, res) => {
  Plate.find()
  .populate('category')
    .then((plates) => res.json(plates))
    .catch((err) => console.log(err));
};

//news  --santiago

const platesNews = (req,res) => {

Plate.find()


  const fecha = new Date();
console.log('dia: ',fecha.getDate())
console.log('mes: ',fecha.getMonth()+1)
console.log('hora: ', fecha.getHours())
console.log('min: ', fecha.getMinutes())
console.log('seg: ', fecha.getSeconds())

}







//update-favorite --. pueda cambiar a true y false ---jean pierre
const updateIsFavoritePlato = (req, res) => {
  const {id, logica} =req.params;
  const value = (logica == 'true'); 
  Plate.findByIdAndUpdate(id,{$set:{isFavorite:value}},{ new: true })
    .then((updatedPlate) => res.json(updatedPlate))
    .catch((err) => res.status(400).json(err));
};

// se realiza el cambio con patch se utiliza $set

//time --> santiago

const recipesTimes = (req, res, next) => {
  const { gte, lte } = req.params;
  const lowerLimit = parseFloat(gte);
  const upperLimit = parseFloat(lte);
  console.log(gte, "esta es la ceparacion", lte);
  // Plate.aggregate([{$match:{$and:[{time:{$gte:lowerLimit, $lte:upperLimit}}]}}])
  Plate.find({$and:[{time:{$gte:lowerLimit, $lte:upperLimit}}]})
  .populate('category')
    .then(recipes => res.json(recipes))
    .catch((err) => {
      console.log("exite un error", err);
      next();
    });
};

// search-name  --- Jean pierre
const getPlateByName = (request, response) => {
  Plate.findOne({ name: request.params.name })
    .then((plate) => response.json(plate))
    .catch((err) => response.json(err));
};

const searchName = (req,res,next) => {

  const {name}= req.params;
  
  Plate.find({nameplate:{$regex: name, $options : 'i'}})
  .then(plate => res.json(plate))
  .catch(err=> {console.log('exite un error',err); next()})
};

// genere un plato ramdon --- depende de la region -- Santiago
// seria de genrar una llista filtrada y obtener un id aleatorio

const randomPlateRegion = (req, res) => {
  // este metodo muestra un chiste aleatorio
  const { RegionName } = req.params;

  Plate.aggregate([{ $match: { region: RegionName } }])
    .sample(1)
    .then((plateRandomRegion) => res.json(plateRandomRegion))
    .catch((err) => console.log(err));
};

////------------------------------------ proximas actualizaciones---------------------------
// busqueda por nombre en tiempo real
// implementar react-infinite-scroll
// autenticacion

////

module.exports = {
  createPlate,
  getAll,
  randomPlate,
  getPlateById,
  updateIsFavoritePlato,
  deletePlate,
  updatePlate,
  getPlateByName,
  platesNews,
  recipesTimes,
  searchName
};


