import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CardsPlates from '../components/PlatesCards';

const RecipesFavorites = () => {
    const [listFavorites, setListFavorites]= useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/favorites/recipes`)
        .then(({data})=> setListFavorites(data))
        .catch(err=> console.log(err))
    },[]);

    return(
        <Navbar>
            <div className='container mt-2'>
                <h2 className='text-center m-0'>Favorites Recipes</h2>
            </div>
            <CardsPlates listRecipes={listFavorites}/>
        </Navbar>
    );
}

export default RecipesFavorites;