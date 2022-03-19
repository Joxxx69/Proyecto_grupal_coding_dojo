const express = require('express');
const app = express();
const port =8000;
const cors = require('cors');


require('./server/config/proyect.confg');

app.use(express.urlencoded({extended:true}), cors(), express.json());
app.set('json spaces', 2);


require('./server/routes/plate.routes')(app);


app.listen(port,()=>{
    console.log(`successful connection on the port ${port}`)
})

