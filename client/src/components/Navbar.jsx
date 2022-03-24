import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo_ninja.webp";

const Navbar = ({ children }) => {
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
                <button type="button" className="btn btn-light">
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
                <button
                  type="button"
                  className="btn btn-light"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tiempo
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/recipes/times/${10}/${20}`}
                    >
                      10 - 20 minutes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/recipes/times/${20}/${30}`}
                    >
                      20 - 30 minutes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/recipes/times/${30}/${60}`}
                    >
                      30 - 60 minutes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  Iniciar Sesion
                </button>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscador de recetas"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
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