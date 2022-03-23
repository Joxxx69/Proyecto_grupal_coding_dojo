import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Recipes = (params) => {
    const {gte, lte} = useParams();
    const [listRecipes, setListRecipes] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/times/${gte}/${lte}`)
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))
    },[]);

    console.log(gte,lte);
    

    
    return(
        <Navbar>
            <h2 className='mt-2 text-center'>Cooking recipes between {gte} to {lte} minutes</h2>
        </Navbar>
    );
}

export default Recipes;




