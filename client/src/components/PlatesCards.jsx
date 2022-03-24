import React from 'react';
import './platesCards.css'

const CardsPlates = ({listRecipes}) => {
    
    console.log(listRecipes)
    return(
        <div className='container mt-4'>
                <div className="row">
                    {
                        listRecipes.map((recipe, idx) =>(
                            <div key={idx} className='card col-lg-4 col-md-6 col-sm-6 border'>
                                <div className='img-cont mt-3 mr-0'>
                                    <img src={recipe.photo} key={idx} alt={recipe.namePlate} className={'image-random'} />
                                </div>
                                <ul className='p-3 m-0'>
                                    <li className='d-block text-center'>
                                        <h5 className='text-uppercase'>{recipe.nameplate}</h5>
                                    </li>
                                    <li className=' d-inline-block mx-3'>
                                        <span>{recipe.time} Minutes </span>
                                        <i className="material-icons-outlined align-bottom"> query_builder</i>  
                                    </li>
                                    <li className='d-inline-block mx-2 '>
                                        <span>{recipe.portions} Porsions </span>
                                        <i className="material-icons-outlined align-bottom"> people</i>  
                                    </li>
                                    <li className='d-inline-block mx-3 '>
                                        <span className='text-capitalize'>{recipe.category.nameCategory} </span>
                                        <i className="material-icons-outlined align-bottom"> restaurant</i>  
                                    </li>
                                </ul>
                                <button className='btn btn-primary p-2 m-2'>ver mas</button>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export default CardsPlates;
