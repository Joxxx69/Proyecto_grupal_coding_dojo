const Category = require("../models/category.model");

const createCategory = (req, res) => {
  const { nameCategory, photoUrl } = req.body;
  console.log(nameCategory, photoUrl)
  console.log('creacion de categoria')
  const newCategory = new Category({ nameCategory, photoUrl });
  newCategory.save()
    .then((category) => res.json(category))
    .catch((err) => console.log("there was an error", err));
};

const getAllCategories = (req, res) => {
  Category.find()
    .then((allCategories) => res.json(allCategories))
    .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
};
const updateCategory = (req, res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateCategory) => res.json(updateCategory))
    .catch((err) => res.status(400).json(err));
};
module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
};
