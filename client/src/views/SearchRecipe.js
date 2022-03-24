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
            console.log(data);
            setListRecipes(data);
        })
        .catch(err => console.log(err))
    },[]);

    return(
        <Navbar>
            <h2 className='mt-2 text-center'> Search Result: </h2>
            <CardsPlates listRecipes={listRecipes}></CardsPlates>
        </Navbar>
    );
}

export default SearchRecipe;