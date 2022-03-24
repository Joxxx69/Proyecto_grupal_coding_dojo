import "./App.css";
import Main from "./views/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/Recipes";
import PlateForm from "./components/PlateForm";
import PlatesByCategory from "./views/PlatesByCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recipes/times/:gte/:lte" element={<Recipes />}></Route>
        <Route path="/add-recipe" element={<PlateForm />}></Route>
        <Route
          path="/recipes/:categoryName"
          element={<PlatesByCategory />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
