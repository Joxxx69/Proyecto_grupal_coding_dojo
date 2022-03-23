import "./App.css";
import Main from './views/Main'
import React from 'react';
import {  Route, Routes } from 'react-router-dom'
import Recipes from "./views/Recipes";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/recipes/times/:gte/:lte" element={<Recipes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
