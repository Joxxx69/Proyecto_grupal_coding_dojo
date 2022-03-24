import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";

const PlateForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCatecory, setSelectedCategory] = useState("");
  const [region, setRegion] = useState("");
  const [nameplate, setNamePlate] = useState("");
  const [time, setTime] = useState("");
  const [portions, setPortions] = useState("");
  const [procedure, setProcedure] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [categoryIsCreated, setCategoryIsCreated] = useState(false);
  const [errors, setErrors] = useState([]);
  const regions = ["Costa", "Sierra", "Oriente", "Insular"];
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/api/getAllCategories").then((res) => {
      setCategories(res.data);
      setSelectedCategory(res.data[0].nameCategory);
      setRegion(regions[0]);
    });
  }, [categoryIsCreated]);

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(
        categories.filter(
          (val, idx) => val.nameCategory === selectedCatecory
        )[0]._id
      );
    }
    console.log(category);
  }, [selectedCatecory]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createPlate", {
        nameplate,
        procedure,
        ingredients,
        category,
        photo,
        region,
        time,
        portions,
        isFavorite: false,
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <Navbar>
      <div>
        <h1 className="text-center">Crea tu receta</h1>
        {errors.map((err, index) => (
          <p
            className="p-3 mb-2 bg-danger text-white text-center col-6 m-auto"
            key={index}
          >
            {err}
          </p>
        ))}
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
              <label className="fw-bold" htmlFor="time">
                Tiempo de cocción:{" "}
              </label>
              <input
                type="number"
                className="form-control"
                id="time"
                placeholder="Tiempo"
                onChange={(e) => setTime(e.target.value)}
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
                id="procedure"
                placeholder="Procedimiento"
                rows="8"
                onChange={(e) =>
                  setProcedure(
                    e.target.value.split(";").map((val, idx) => val.trim())
                  )
                }
              ></textarea>
              <div id="emailHelp" className="form-text">
                Separe cada paso con un punto y coma (";")
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
                onChange={(e) =>
                  setIngredients(
                    e.target.value.split(";").map((val, idx) => val.trim())
                  )
                }
              ></textarea>
              <div id="emailHelp" className="form-text">
                Separe los ingredientes con un punto y coma (";")
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
                  defaultValue={region}
                  onChange={(e) => setRegion(e.target.value)}
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
              onChange={(e) => setPhoto(e.target.value)}
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
