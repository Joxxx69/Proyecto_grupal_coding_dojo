import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './recipe.css'

const RecipeOne = () => {

    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/plate/one/${id}`)
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))
    },[]);
    
    return(
        <Navbar>
            <div className='container p-4'>
                <div className='border  row'>
                    <div className='col-md-8 offset-md-2'>
                        <div className='card recipe'>
                            <h2>hola como estan</h2>
                        </div>
                    </div>

                </div>
            </div>
        </Navbar>
    );
}

export default RecipeOne;