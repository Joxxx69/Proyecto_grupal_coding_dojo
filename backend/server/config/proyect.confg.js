const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Recipes',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log('se establecio la conexion con la base de datos'))
.catch(err=> console.log('no se pudo establecer la conexion con la base de datos', err));








