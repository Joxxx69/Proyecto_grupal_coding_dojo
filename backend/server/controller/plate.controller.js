const Plate = require("../models/plate.model");

/// para verle todos como hacer este controlor

//random  ---santiago
const randomPlate = (req, res) => {
  const { ing1, ing2, ing3 } = req.params;
  // sample me genera uno doucmento aleatorio y all hace coincidan todos los elementos.
  Plate.aggregate([{ $match: { ingredients: { $all: [ing1, ing2, ing3] } } }])
    .sample(1)
    .then(plateRandom =>{
      // el condicional me devuelve un plato aleatorio en caso que ninguno de los ingredientes coincidan con "$all"
      // el platon aleatorio sera generado con "$in"
      console.log('1')
      if(Object.keys(plateRandom).length === 0){
        console.log('2')
        Plate.aggregate([{ $match: { ingredients: { $in: [ing1, ing2, ing3] } } }])
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

//create  ---Jean Pierre --- hace falta lo de la referencia
const createPlate = (req, res) => {
  const {
    nameplate,
    time,
    portions,
    procedure,
    category,
    ingredients,
    isFavorite,
    photo,
    province,
  } = req.body;
  const newPlate = new Plate({
    nameplate,
    time,
    portions,
    procedure,
    category,
    ingredients,
    isFavorite,
    photo,
    province,
  });
  newPlate
    .save()
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
  Plate.findOne({ _id: req.params.id })
    .then((plate) => res.json(plate))
    .catch((err) => res.status(400).json(err));
};

//getAll -- jean pirre
const getAll = (req, res) => {
  Plate.find()
    .then((plates) => res.json(plates))
    .catch((err) => console.log(err));
};

//news  --santiago

//update-favorite --. pueda cambiar a true y false ---jean pierre
const updateIsFavoritePlato = (req, res) => {
  Plate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPlate) => res.json(updatedPlate))
    .catch((err) => res.status(400).json(err));
};

// se realiza el cambio con patch se utiliza $set

//time

const priceFurniture = (req, res, next) => {
  const { gte, lte, categoryId } = req.params;
  console.log(categoryId);
  const lowerLimit = parseFloat(gte);
  const upperLimit = parseFloat(lte);
  console.log(gte, "esta es la ceparacion", lte);
  // Furniture.aggregate([{$match:{$and:[{price:{$gte:lowerLimit, $lte:upperLimit}}]}}])
  Furniture.find({
    $and: [
      { price: { $gte: lowerLimit, $lte: upperLimit } },
      { category: categoryId },
    ],
  })
    .then((furniture) => res.json(furniture))
    .catch((err) => {
      console.log("exite un error", err);
      next();
    });
};

// search-name  --- Ernesto
const getPlateByName = (request, response) => {
  Plate.findOne({ name: request.params.name })
    .then((plate) => response.json(plate))
    .catch((err) => response.json(err));
};

// genere un plato ramdon --- depende de la region -- Santiago
// seria de genrar una llista filtrada y obtener un id aleatorio

const randomPlateProvince = (req, res) => {
  // este metodo muestra un chiste aleatorio
  const { provinceName } = req.params;

  Plate.aggregate([{ $match: { province: provinceName } }])
    .sample(1)
    .then((plateRandomProvince) => res.json(plateRandomProvince))
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
};

const fecha = new Date();
console.log(fecha.getUTCDate());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCHours());
console.log(fecha.getHours());

// const fecha = new Date();
//     console.log(fecha.getUTCDate())
//     console.log(fecha.getUTCMonth())
//     console.log(fecha.getUTCFullYear())
//     console.log(fecha.getUTCHours())
//     console.log(fecha.getHours())

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

console.log(tiempoTranscurrido);
console.log(hoy);
