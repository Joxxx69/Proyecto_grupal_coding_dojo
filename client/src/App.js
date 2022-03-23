import "./App.css";
import Main from './views/Main'
import Logo from './images/logo_ninja.webp'
import React from 'react';
import {  Route, Routes } from 'react-router-dom'
// import Main from './views/Main'


function App() {
  return (
    <div className="App">
      <Main image_Logo={Logo}/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
