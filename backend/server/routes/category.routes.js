const controller = require("../controller/category.controller");

module.exports = function(app) {
  app.post("/api/new-category", controller.createCategory);
  app.get("/api/getAllCategories", controller.getAllCategories);
  app.put("/api/updateCategory/:id", controller.updateCategory);
};
