import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CardsPlates from '../components/PlatesCards';

const SearchRecipe = (params) => {
    const {name} = useParams();
    const [listRecipes, setListRecipes] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/search/${name}`)
        .then(({data})=> {
            setListRecipes(data);
        })
        .catch(err => console.log(err))
    },[name]);

    return(
        <Navbar>
            <h2 className='mt-2 text-center'> Search Result: </h2>
            <CardsPlates listRecipes={listRecipes}></CardsPlates>
            {
                listRecipes.length === 0 && <h4 className = 'text-center'> Plato {name} no encontrado</h4>
            }
        </Navbar>
    );
}

export default SearchRecipe;