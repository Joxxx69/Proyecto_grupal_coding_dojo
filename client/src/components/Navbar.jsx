import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo_ninja.webp";

const Navbar = ({ children }) => {
  const [search, setSearch] =useState([]);
  let navigate = useNavigate();

  return (
    <div className="container py-4">
      <div className="d-flex ">
        <img src={Logo} alt="logo" width="100" height="100" />
        <h2 className="align-self-center mx-auto pe-5">Recetas Ninja</h2>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={(e) => navigate("/")}
                >
                  Inicio
                </button>
              </li>
              <li className="nav-item">
                <button 
                  type="button" 
                  className="btn btn-light"
                  onClick={(e) => navigate("/all-recipes")}
                >
                  Recetas
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={(e) => navigate("/add-recipe")}
                >
                  Nuevas Recetas
                </button>
              </li>
              <li className="nav-item dropdown">
                <button  type="button" className="btn btn-light" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"  >
                  Tiempo
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/recipes/times/${10}/${20}`} >
                      10 - 20 minutes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item" to={`/recipes/times/${20}/${30}`} >
                      20 - 30 minutes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/recipes/times/${30}/${60}`}>
                      30 - 60 minutes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'/favorites/recipes/list'} className={'btn btn-light'}>Recetas Favoritas</Link>
              </li>
              <li className="nav-item dropdown">
                <button  type="button" className="btn btn-light" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"  >
                  Aleatorio por Region
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/recipes/random/${'Costa'}`} >
                      Costa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item" to={`/recipes/random/${'Sierra'}`} >
                      Sierra
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/recipes/random/${'Oriente'}`}>
                      Oriente
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/recipes/random/${'Insular'}`}>
                      Insular
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscador de recetas"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link
                to={`/search/recipe/${search}`}
              >
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </Link>
            </form>
            <div className="nav-item dropdown col-1 text-center">
              <button  type="button" className="btn btn-light mx-auto " id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"  >
                <i className="material-icons-outlined align-bottom" style={{"font-size": "35px"}} >account_circle</i>
                
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/signup`} >
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/login`} >
                      Sign in
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className="text-center mt-3">
        <div className="social">
          <a href="">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <p className="copyright">Recetas Ninja © 2022</p>
      </footer>
    </div>
  );
};

export default Navbar;