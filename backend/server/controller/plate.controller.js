const Plate = require("../models/plate.model");

/// para verle todos como hacer este controlor

//random  ---santiago
const randomPlate = (req, res) => {
  // este metodo muestra un chiste aleatorio
  const { ing1, ing2, ing3 } = req.params;
  // {ingredientes:{$in:[ing1,ing2,ing3]}}
  console.log(`${ing1}--------${ing2}------${ing3}`);
  // Plate.aggregate([{$sample:{size:1}},{ingredientes:{$in:[ing1,ing2,ing3]}}])

  //  Plate.aggregate([{$match:{ingredientes:{$in:[ing1,ing2,ing3]}}}])

  Plate.aggregate([{ $match: { ingredients: { $in: [ing1, ing2, ing3] } } }])
    .sample(1)

    //  .limit(1)
    // Plate.aggregate([{$sample:{size:1}}])
    // .match({ingredients:{$in:[ing1,ing2,ing3]}})
    //  .where({ingredients:{$in:[ing1,ing2,ing3]}})
    .then((plateRandom) => res.json(plateRandom))
    .catch((err) => console.log(err));
};

// deleteOne --- Ernesto
module.exports.deletePlate = (request, response) => {
  Plate.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
//create  ---Jean Pierre

const createPlate = (req, res) => {
  const { nameplate, ingredients } = req.body;
  const newPlate = new Plate({ nameplate, ingredients });
  newPlate
    .save()
    .then((plate) => res.json(plate))
    .catch((err) => console.log("there was an error", err));
};

//update --- Ernesto
module.exports.updatePlate = (request, response) => {
  Plate.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updatePlate) => response.json(updatePlate))
    .catch((err) => response.status(400).json(err));
};
//getOne -- jean pirre
const getPlate = (req, res) => {
    Plate.findOne({_id:req.params.id})
        .then(plate => res.json(plate))
        .catch(err => res.status(400).json(err))
}

//getAll -- jean pirre

const getAll = (req, res) => {
  Plate.find()
    .then((plates) => res.json(plates))
    .catch((err) => console.log(err));
};

//news  --santiago

//update-favorite --. pueda cambiar a true y false ---jean pierre

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
<<<<<<< HEAD
module.exports.getPlate = (request, response) => {
  Plate.findOne({ name: request.params.name })
    .then((plate) => response.json(plate))
    .catch((err) => response.json(err));
};
// genere un plato ramdon --- depende de la provincia -- Santiago
// seria de genrar una llista filtrada y obtener un id aleatorio
=======



// genere un plato ramdon --- depende de la region -- Santiago
// seria de genrar una llista filtrada y obtener un id aleatorio 


const randomPlateProvince = (req,res) => {
    // este metodo muestra un chiste aleatorio
    const {provinceName}= req.params;

     Plate.aggregate([{$match:{province:provinceName}}])
     .sample(1)
     .then(plateRandomProvince => res.json(plateRandomProvince))
    .catch(err => console.log(err));
  };

>>>>>>> b78c1937ae1b8b7418091d8a2d2759a43c03f818

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

module.exports = { createPlate, getAll, randomPlate };

<<<<<<< HEAD
const fecha = new Date();
console.log(fecha.getUTCDate());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCHours());
console.log(fecha.getHours());
=======
// const fecha = new Date();
//     console.log(fecha.getUTCDate())
//     console.log(fecha.getUTCMonth())
//     console.log(fecha.getUTCFullYear())
//     console.log(fecha.getUTCHours())
//     console.log(fecha.getHours())    

    const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

console.log(tiempoTranscurrido)
console.log(hoy)
>>>>>>> b78c1937ae1b8b7418091d8a2d2759a43c03f818
