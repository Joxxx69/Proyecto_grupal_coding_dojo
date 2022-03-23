import "./App.css";
import Main from './views/Main'
import React from 'react';
import {  Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
