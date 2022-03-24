import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CardsPlates from '../components/PlatesCards';

const Recipes = (params) => {
    const {gte, lte} = useParams();
    const [listRecipes, setListRecipes] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/times/${gte}/${lte}`)
        .then(({data})=> {
            setListRecipes(data);
        })
        .catch(err => console.log(err))
    },[gte,lte]);
 
    return(
        <Navbar>
            <h2 className='mt-4 mb-0 text-center'>Cooking recipes between {gte} to {lte} minutes</h2>
            <CardsPlates listRecipes={listRecipes}></CardsPlates>
        </Navbar>
    );
}

export default Recipes;




