import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const PlateForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCatecory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [nameplate, setNamePlate] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [portions, setPortions] = useState("");
  const [procedure, setProcedure] = useState("");
  const [proc1, setProc1] = useState("");
  const [proc2, setProc2] = useState("");
  const [proc3, setProc3] = useState("");
  const [ing1, setIng1] = useState("");
  const [ing2, setIng2] = useState("");
  const [ing3, setIng3] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const regions = ["Costa", "Sierra", "Oriente", "Insular"];
  useEffect(() => {
    axios.get("http://localhost:8000/api/getAllCategories").then((res) => {
      setCategories(res.data);
      setSelectedCategory(res.data[0].nameCategory);
      setSelectedRegion(regions[0]);
      //   console.log(res.data);
    });
  }, []);

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
      procedure: [proc1, proc2, proc3],
      ingredients: [ing1, ing2, ing3],
      category: categoryId,
      photo: photoUrl,
      region: selectedRegion,
      time: prepTime,
      portions: portions,
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
                placeholder="Paso 1"
                rows="3"
                onChange={(e) => setProc1(e.target.value)}
              ></textarea>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Paso 2"
                rows="3"
                onChange={(e) => setProc2(e.target.value)}
              ></textarea>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Paso 3"
                rows="3"
                onChange={(e) => setProc3(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group col-6">
              <label className="fw-bold" htmlFor="ingredients">
                Ingredientes:
              </label>
              <input
                type="text"
                className="form-control"
                id="ingredients"
                placeholder="Ingrediente 1"
                onChange={(e) => setIng1(e.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                id="ingredients"
                placeholder="Ingrediente 2"
                onChange={(e) => setIng2(e.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                id="ingredients"
                placeholder="Ingrediente 3"
                onChange={(e) => setIng3(e.target.value)}
              ></input>

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
              onChange={(e) => setPhotoUrl(e.target.value)}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Navbar>
  );
};
export default PlateForm;
