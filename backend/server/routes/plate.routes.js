const controller = require("../controller/plate.controller");

module.exports = function (app) {
  app.post("/api/createPlate", controller.createPlate);
  app.get("/api/plate/:name", controller.getPlateByName);
  app.put("/api/update/:id", controller.updatePlate);

  app.delete("/api/plate/delete/:id", controller.deletePlate);
  app.get("/api/getAll", controller.getAll); 
  app.get("/api/plate/one/:id", controller.getPlateById);
  app.get("/api/favorites/recipes", controller.FavoritesRecipes);

  app.post("/api/new_plate", controller.createPlate);
  app.patch("/api/edit_favorite_plate/:id/:logica", controller.updateIsFavoritePlato);
  app.get("/api/recipes/times/:gte/:lte",controller.recipesTimes);
  app.get("/api/getRandom/:ing1/:ing2/:ing3", controller.randomPlate);

  app.get("/api/search/:name",controller.searchName);
  app.get("/api/random_plate/:regionName",controller.randomPlateRegion);
};
