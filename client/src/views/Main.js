//import React, { useEffect, useState } from 'react'
//import axios from 'axios';
//import {Link} from '@reach/router'
import PlateRandom from "../components/PlateRandom";
import CarouselDisplay from '../components/CarouselDisplay'

const Main = ()=> {

    return (
        <div className="container py-4">
            <h2>Recetas Ninja</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button type="button" className="btn btn-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <button type="button" className="btn btn-light" >Inicio</button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-light" >Recetas</button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-light" >Nuevas Recetas</button>
                        </li>
                        <li className="nav-item dropdown">
                        <button type="button" className="btn btn-light" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                            Tiempo
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item" >10 - 20 minutos</button></li>
                            <li><button className="dropdown-item" >20 - 30 minutos</button></li>
                            <li><button className="dropdown-item" >30-40 minutos</button></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-light" >Iniciar Sesion</button>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscador de recetas" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
            <h2>Imagenes con Nombres de Comida</h2>
            <CarouselDisplay/>
            <PlateRandom/>
        </div>
        //Lo subo para que vean como esta pero ya le pongo un logo, las otras ventanas y un footer y si alcanzo le pongo colores
    )
}
export default Main;