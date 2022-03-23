import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Recipes = (params) => {
    const parametros = useParams();

    console.log(parametros);
    
    return(
        <Navbar>
            <h2>holas como estan</h2>
        </Navbar>
    );
}

export default Recipes;