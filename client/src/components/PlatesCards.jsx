import React from 'react';
import { Link } from 'react-router-dom';
import './platesCards.css'

const CardsPlates = ({listRecipes}) => {
    
    console.log(listRecipes)
    return(
        <div className='container  p-4'>
                <div className=" row">
                    {
                        listRecipes.map((recipe, idx) =>(
                            <div key={idx} className='mt-4 col-lg-4 col-md-6 col-sm-6 '>
                                <div className='card'>
                                    <div className='img-cont mx-3 mt-3'>
                                        <img src={recipe.photo} key={idx} alt={recipe.namePlate} className={'image-random d-block img-fluid '} />
                                    </div>
                                    <ul className='p-3 m-0'>
                                        <li className='d-block text-center'>
                                            <h5 className='text-uppercase'>{recipe.nameplate}</h5>
                                        </li>
                                        <li className=' d-inline-block mx-2'>
                                            <span>{recipe.time} Minutes </span>
                                            <i className="material-icons-outlined align-bottom"> query_builder</i>  
                                        </li>
                                        <li className='d-inline-block mx-2 '>
                                            <span>{recipe.portions} Porsions </span>
                                            <i className="material-icons-outlined align-bottom"> people</i>  
                                        </li>
                                        <li className='d-inline-block mx-2 '>
                                            <span className='text-capitalize'>{recipe.category.nameCategory} </span>
                                            <i className="material-icons-outlined align-bottom"> restaurant</i>  
                                        </li>
                                    </ul>
                                    <Link to={`/one/recipe/${recipe._id}`} className='btn btn-primary p-2 m-2'>ver mas</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export default CardsPlates;
