import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CardsPlates from '../components/PlatesCards';

const AllRecipes = () => {
    const [listRecipes, setListRecipes] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getAll`)
        .then(({data})=> {
            setListRecipes(data);
        })
        .catch(err => console.log(err))
    },[]);
    
    return(
        <Navbar>
            <h2 className='mt-2 text-center'>All Recipes: </h2>
            <CardsPlates listRecipes={listRecipes}></CardsPlates>
        </Navbar>
    );
}

export default AllRecipes;