import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

const FormRecipes = ({recipeObject}) => {
    const { Initnameplate, Inittime, Initportions, Initprocedure, Initcategory, Initingredients, InitisFavorite, Initphoto, Initregion } = recipeObject;
    const [recipe, setRecipe]= useState({
        nameplate:Initnameplate,
        time:Inittime,
        portions:Initportions,
        procedure:Initprocedure,
        category:Initcategory,
        ingredients:Initingredients, 
        isFavorite:InitisFavorite,
        photo:Initphoto,
        region:Initregion,
      });
      const { nameplate, time, portions, procedure, category, ingredients, isFavorite, photo, region } = recipe;

      return(
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
                id="procedure"
                placeholder="Procedimiento"
                rows="8"
                onChange={(e) => setProcedure(e.target.value)}
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
                onChange={(e) => setIngredients(e.target.value)}
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

}

export default FormRecipes;