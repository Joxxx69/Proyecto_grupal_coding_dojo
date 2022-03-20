const Category = require("../models/categoria.model");

const createCategory = (req, res) => {
  const { nameCategory, photoUrl } = req.body;
  const newCategory = new Category({
    nameCategory,
    photoUrl,
  });
  newCategory
    .save()
    .then((category) => res.json(category))
    .catch((err) => console.log("there was an error", err));
};

const getAllCategories = (request, response) => {
  Category.find()
    .then((allCategories) => response.json({ recipe: allCategories }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};
module.exports = {
  createCategory,
  getAllCategories,
};
