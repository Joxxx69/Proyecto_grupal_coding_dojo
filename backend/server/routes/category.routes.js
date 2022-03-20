const categoryController = require("../controller/category.controller");

module.exports = function (app) {
  app.post("/api/new-category", categoryController.createCategory);
  app.get("/api/getAllCategories", categoryController.getAllCategories);
};
