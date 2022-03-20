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
    .then((allCategories) => response.json(allCategories))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};
const updateCategory = (request, response) => {
  Category.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updateCategory) => response.json(updateCategory))
    .catch((err) => response.status(400).json(err));
};
module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
};
