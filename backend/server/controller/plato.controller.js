const Plate =require('../models/plate.model');



/// para verle todos como hacer este controlor



//random  ---santiago
const randomPlate = (req,res) => {
    // este metodo muestra un chiste aleatorio
    const {ig1, ig2,ig3}= req.params;
    return Jokers.aggregate([{$sample:{size:1}},{ingredientes:{$in:[ing1,ing2,ing3]}}]) //Jokers.aggregate.sample(1)   Jokers.aggregate([{$sample:{size:1}}])      
          .then((joker) => res.json(joker))
          .catch(handleError(res));
  };


// deleteOne --- Ernesto


//create  ---Jean Pierre


//update --- Ernesto


//getOne -- jean pirre


//getAll -- jean pirre



//news  --santiago


//update-favorite --. pueda cambiar a true y false ---jean pierre

// se realiza el cambio con patch se utiliza $set


//time

const priceFurniture =(req,res, next)=>{
    const {gte, lte, categoryId}=req.params;
    console.log(categoryId)
    const lowerLimit = parseFloat(gte);
    const upperLimit = parseFloat(lte);
    console.log(gte,'esta es la ceparacion',lte)
    // Furniture.aggregate([{$match:{$and:[{price:{$gte:lowerLimit, $lte:upperLimit}}]}}])
    Furniture.find({$and:[{price:{$gte:lowerLimit, $lte:upperLimit}},{category:categoryId}]})
    .then(furniture => res.json(furniture))
    .catch(err=> {console.log('exite un error',err); next()})
}


// search-name  --- Ernesto



// genere un plato ramdon --- depende de la provincia -- Santiago
// seria de genrar una llista filtrada y obtener un id aleatorio 



////------------------------------------ proximas actualizaciones---------------------------
// busqueda por nombre en tiempo real
// implementar react-infinite-scroll
// autenticacion

////

