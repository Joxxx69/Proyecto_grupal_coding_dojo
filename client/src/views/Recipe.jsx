import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./recipe.css";

const RecipeOne = () => {
    const [recipe, setRecipe] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [stateFavorite, setEstateFavorite] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plate/one/${id}`)
            .then(({ data }) => {
                setRecipe(data);
                setEstateFavorite(data.isFavorite)
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    },[stateFavorite]);

    console.log('este es el estafo',stateFavorite);

    const isFavorite = () => (
        favorite? <i className="bi bi-bookmark-fill"></i>:<i className="bi bi-bookmark"></i>
    )

    const favoriteSubmit =(e)=>{
        e.preventDefault();
        const copy = recipe;
        console.log(copy);
        axios.patch(`http://localhost:8000/api/edit_favorite_plate/${id}/${stateFavorite}`)
        .then(({data}) => console.log(data.isFavorite))
        .catch(err => console.log(err))
    }

    const favoritePlate =()=>(
        <form onSubmit={favoriteSubmit}>
            <button type="submit" className="btn btn-success" onClick={()=> setEstateFavorite(!stateFavorite)}>booleano</button>
        </form>
    )
    

    return (
        <Navbar>
            {loaded && (
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card recipe">
                                <ul className='p-3 m-0 text-center list-inline'>
                                    <li className=' row justify-content-center'>
                                        <div className="col-1"/>
                                        <h2 className='text-uppercase text-center col-9'>{recipe.nameplate}</h2>
                                        <button className="btn btn-secondary col-1" onClick={()=>setFavorite(!favorite)}>
                                            {isFavorite()}
                                        </button>
                                    </li>
                                    <li className=' list-inline-item'>
                                        <span className="h5 text-muted">{recipe.time} Minutes </span>
                                        <i className="material-icons-outlined align-bottom ml-1"> query_builder</i>
                                    </li>
                                    <li className='list-inline-item '>
                                        <span className="h5 text-muted">{recipe.portions} Porsions </span>
                                        <i className="material-icons-outlined align-bottom"> people</i>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span className="h5 text-muted">{recipe.category.nameCategory}</span>
                                        <i className="material-icons-outlined align-bottom"> restaurant</i>
                                    </li>
                                </ul>
                                <div className="container p-3">
                                    <img className="mx-auto d-block img-fluid img-recipe" src={recipe.photo} alt={recipe.nameplate} />
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-3 ">   
                                        <h4 className="mt-3">
                                            <span>Ingredientes </span>
                                            <i className="material-icons-outlined align-bottom">fact_check</i>
                                        </h4>
                                        <ol className="mt-3">
                                            {recipe.ingredients.map((ingredient,idx)=>(
                                                <li key={idx} className={'list-unstyled mb-2'}>
                                                    <i className="material-icons-outlined align-bottom">verified</i>
                                                    <span className={'text-capitalize'}> {ingredient}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                    <div className="col-5">
                                        <h4 className="mt-3">
                                            <span>Procedimiento </span>
                                            <i className="material-icons-outlined align-bottom">menu_book</i>
                                        </h4>
                                        <ol className="mt-3">
                                            {recipe.procedure.map((process,idx)=>(
                                                <li key={idx} className={' mb-2'}>
                                                    <span className={'text-justify'} >{process}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {favoritePlate()}
        </Navbar>
    );
};

export default RecipeOne;
