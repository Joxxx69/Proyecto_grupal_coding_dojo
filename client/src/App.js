import "./App.css";
import Main from "./views/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/Recipes";
import PlateForm from "./components/PlateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recipes/times/:gte/:lte" element={<Recipes />}></Route>
        <Route path="/add-recipe" element={<PlateForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
