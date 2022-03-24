import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ModalForm from "./ModalForm";

const PlateForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCatecory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [nameplate, setNamePlate] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [portions, setPortions] = useState("");
  const [procedure, setProcedure] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryIsCreated, setCategoryIsCreated] = useState(false);

  const regions = ["Costa", "Sierra", "Oriente", "Insular"];
  useEffect(() => {
    axios.get("http://localhost:8000/api/getAllCategories").then((res) => {
      setCategories(res.data);
      setSelectedCategory(res.data[0].nameCategory);
      setSelectedRegion(regions[0]);
      //   console.log(res.data);
    });
  }, [categoryIsCreated]);

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryId(
        categories.filter(
          (val, idx) => val.nameCategory === selectedCatecory
        )[0]._id
      );
    }
    console.log(categoryId);
  }, [selectedCatecory]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/createPlate", {
      nameplate: nameplate,
      procedure: procedure.split(".").map((val, idx) => val.trim()),
      ingredients: ingredients.split(",").map((val, idx) => val.trim()),
      category: categoryId,
      photo: photoUrl,
      region: selectedRegion,
      time: prepTime,
      portions: portions,
      isFavorite: false,
    });
    // console.log(Ingredients);
  };

  return (
    <Navbar>
      <div>
        <h1 className="text-center">Crea tu receta</h1>
        <form className="mx-auto w-50" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="form-group col-6">
              <label className="fw-bold" htmlFor="name">
                Nombre de la receta:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                onChange={(e) => setNamePlate(e.target.value)}
                placeholder="Nombre de la receta"
              ></input>
            </div>
            <div className="form-group col-3">
              <label className="fw-bold" htmlFor="prepTime">
                Tiempo de cocción:{" "}
              </label>
              <input
                type="number"
                className="form-control"
                id="prepTime"
                placeholder="Tiempo"
                onChange={(e) => setPrepTime(e.target.value)}
              ></input>
            </div>
            <div className="form-group col-3">
              <label className="fw-bold" htmlFor="portions">
                Número de porciones:
              </label>
              <input
                type="number"
                className="form-control"
                id="portions"
                aria-describedby="emailHelp"
                placeholder="Porciones"
                onChange={(e) => setPortions(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-6">
              <label className="fw-bold" htmlFor="procedure">
                Procedimiento:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Procedimiento"
                rows="8"
                onChange={(e) => setProcedure(e.target.value)}
              ></textarea>
              <div id="emailHelp" class="form-text">
                Separe cada paso con un punto (".")
              </div>
            </div>
            <div className="form-group col-6">
              <label className="fw-bold" htmlFor="ingredients">
                Ingredientes:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="ingredients"
                placeholder="Ingredientes"
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              <div id="emailHelp" class="form-text">
                Separe los ingredientes con una coma (",")
              </div>

              <div className="form-group">
                <label className="fw-bold" htmlFor="category">
                  Categoría:
                </label>
                <select
                  id="inputState"
                  className="form-control"
                  defaultValue={selectedCatecory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((val, idx) => {
                    return <option key={idx}>{val.nameCategory}</option>;
                  })}
                </select>
                <ModalForm
                  categoryIsCreated={categoryIsCreated}
                  setCategoryIsCreated={setCategoryIsCreated}
                />
              </div>

              <div className="form-group">
                <label className="fw-bold" htmlFor="region">
                  Región:
                </label>
                <select
                  id="region"
                  className="form-control"
                  defaultValue={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map((val, idx) => {
                    return <option key={idx}>{val}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold" htmlFor="photo">
              Url de la imagen:
            </label>
            <input
              type="text"
              className="form-control"
              id="photo"
              aria-describedby="emailHelp"
              placeholder="Url de la imágen"
              onChange={(e) => setPhotoUrl(e.target.value)}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Crear
          </button>
        </form>
      </div>
    </Navbar>
  );
};
export default PlateForm;
