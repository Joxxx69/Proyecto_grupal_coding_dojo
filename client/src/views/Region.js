import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Region = (params) => {
    const {regionName} = useParams();
    const [listRecipes, setListRecipes] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/random_plate/${regionName}`)
        .then(({data})=> {
            console.log(data);
            setListRecipes(data);
        })
        .catch(err => console.log(err))
    },[regionName]);

    return(
        <Navbar>
            <h2 className='mt-2 text-center'> Region: {regionName}</h2>
            <div className="shadow p-3 mb-5 bg-body rounded w-50 mx-auto">
                {
                listRecipes.map((image, idx) =>(
                    <div key={idx}>
                    <div className='img-cont mx-auto mt-2'>
                        <img src={image.photo} key={idx} alt={image.namePlate} className={'image-random d-block img-fluid '} />
                    </div>
                    <h5 className='text-uppercase text-center mt-2'>{image.nameplate}</h5>
                    <ul className=' d-flex justify-content-center '>
                        <li className=' d-inline-block mx-3'>
                        <span>{image.time} Minutes </span>
                        <i className="material-icons-outlined align-bottom"> query_builder</i>  
                        </li>
                        <li className='d-inline-block mx-2 '>
                        <span>{image.portions} Porsions </span>
                        <i className="material-icons-outlined align-bottom"> people</i>  
                        </li>
                        <li className='d-inline-block mx-3 '>
                        <span className='text-capitalize'>{image.category[0].nameCategory} </span>
                        <i className="material-icons-outlined align-bottom"> restaurant</i>  
                        </li>
                    </ul>

                    </div>
                ))
                }
                {
                    listRecipes.length === 0 && <h4 className = 'text-center'>  Plato no encontrado</h4>
                }
            </div>
            
        </Navbar>
    );
}

export default Region;