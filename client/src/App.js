import "./App.css";
import Main from "./views/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/RecipesTimes";
import PlateForm from "./components/PlateForm";
import PlatesByCategory from "./views/PlatesByCategory";
import AllRecipes from "./views/AllRecipes";
import SearchRecipe from "./views/SearchRecipe";
import RecipeOne from "./views/Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recipes/times/:gte/:lte" element={<Recipes />}></Route>
        <Route path="/add-recipe" element={<PlateForm />}></Route>
        <Route path="/recipes/:categoryName" element={<PlatesByCategory />}></Route>
        <Route path="/all-recipes" element={<AllRecipes />}></Route>
        <Route path="/repice/:name" element={<SearchRecipe />}></Route>
        <Route path="/one/recipe/:id" element={<RecipeOne/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
