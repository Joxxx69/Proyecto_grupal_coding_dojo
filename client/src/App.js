import "./App.css";
import Main from "./views/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/RecipesTimes";
import PlatesByCategory from "./views/PlatesByCategory";
import AllRecipes from "./views/AllRecipes";
import SearchRecipe from "./views/SearchRecipe";
import RecipeOne from "./views/Recipe";
import RecipesFavorites from "./views/RecipesFavorites";
import AddRecipe from "./views/AddRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recipes/times/:gte/:lte" element={<Recipes />}></Route>
        <Route path="/add-recipe" element={<AddRecipe />}></Route>
        <Route
          path="/recipes/:categoryName"
          element={<PlatesByCategory />}
        ></Route>
        <Route path="/all-recipes" element={<AllRecipes />}></Route>
        <Route path="/one/recipe/:id" element={<RecipeOne />}></Route>
        <Route path="/search/recipe/:name" element={<SearchRecipe />}></Route>
        <Route
          path="/favorites/recipes/list"
          element={<RecipesFavorites />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
