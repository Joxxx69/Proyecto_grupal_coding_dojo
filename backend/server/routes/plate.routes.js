const controller = require("../controller/plate.controller");

module.exports = function (app) {
  app.post("/api/createPlate", controller.createPlate);
  //app.get("/api/getAll", controller.getAll);
  app.get("/api/getRandom/:ing1/:ing2/:ing3", controller.randomPlate);
  app.get("/api/plate/:name", controller.getPlate);
  app.put("/api/update/:id", controller.updateRecipe);
  app.delete("/api/recipe/:id", controller.deleteRecipe);
  //ruta de prueba
  //rutas Jean
  app.get("/api/getAll", controller.getAll);
  app.get('/api/plate/:id', controller.getPlateById);
  app.post('/api/new_plate', controller.createPlate);
  app.patch('/api/edit_favorite_plate/:id', controller.updateIsFavoritePlato);
};
