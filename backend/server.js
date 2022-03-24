const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000; 
const cookieParser = require('cookie-parser');

require("./server/config/proyect.confg");
require('dotenv').config();


app.use(express.json(),express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());


app.set("json spaces", 2);

require("./server/routes/plate.routes")(app);
require("./server/routes/category.routes")(app);
require("./server/routes/auth.routes")(app);

app.listen(port, () => {
  console.log(`successful connection on the port ${port}`);
});
