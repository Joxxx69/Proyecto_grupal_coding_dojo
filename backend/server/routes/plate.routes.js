const controller = require("../controller/plate.controller");

<<<<<<< HEAD
module.exports = function (app) {
  app.post("/api/createPlate", controller.createPlate);
  app.get("/api/getAll", controller.getAll);
  app.get("/api/getRandom/:ing1/:ing2/:ing3", controller.randomPlate);
  app.get("/api/plate/:name", controller.getPlate);
  app.put("/api/update/:id", controller.updateRecipe);
  app.delete("/api/recipe/:id", controller.deleteRecipe);
};
=======

module.exports = function(app) {
    app.post('/api/createPlate', controller.createPlate );
    app.get('/api/getAll', controller.getAll);
    app.get('/api/getRandom/:ing1/:ing2/:ing3', controller.randomPlate);
    app.patch('/api/edit_plato/:id', PlatoController.updatePlato);
    // funciona el escritorio
    // este es un simulacro de igresar
}  
>>>>>>> b78c1937ae1b8b7418091d8a2d2759a43c03f818
