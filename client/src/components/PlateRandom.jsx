import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './platerandom.css'
import Logo from '../images/logo_ninja.webp'



const PlateRandom = () => {

    const [list, setList]= useState([]);
    const [result, setResult]=useState({});
    const [ingredients, setIngredients]=useState({
        ingredient1:'',
        ingredient2:'',
        ingredient3:''
    });
    const [loaded, setLoaded]=useState(false)


    const {ingredient1, ingredient2, ingredient3}= ingredients;

    
    const IngredientChange = (e) => {
        setIngredients({...ingredients, [e.target.name]:e.target.value});
      };

    const Submit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/api/getRandom/${ingredient1}/${ingredient2}/${ingredient3}`)
        .then(({data})=> {
          console.log(data.category)
          setResult(data)
          setLoaded(true)
        })
        .catch(err => console.log('there was an error', err))


    };

    console.log(result);

    if(loaded){

      // result.map(objectresult=> objectresult.category.map(resul => console.log(resul.nameCategory)))
      console.log('hola')
      result.map(objectresult=> console.log(objectresult.category[0].nameCategory))
    }



    const InputsForm=[
        {name:"ingredient1" , value: ingredient1, type:"text", label: "ingredient 1:"},
        {name:"ingredient2" , value: ingredient2, type:"text", label: "ingredient 2:"},
        {name:"ingredient3" , value: ingredient3, type:"text", label: "ingredient 3:"}
    ]


    return (
      <div className='container mt-4 border'>
        <h2 className="mb-3 mt-3 text-center">Search by ingredients</h2>
        <div className='offset-2 mb-4 '>
          <form className="col-4 d-inline-block p-3 mb-4 card-cont " onSubmit={Submit}>
            {InputsForm.map((input, idx) => (
              <div className="form-group" key={idx}>
                <label className="text-muted ">{input.label}</label>
                <input required type={input.type} className="form-control p-2"
                  value={input.value} name={input.name}  onChange={IngredientChange}
                />
              </div>
            ))}
            <div className="mt-4 col-3 ">  
              <input className="btn btn-primary col-12 p-2 font-weight-bold text-center" type={"submit"} value={"Search"} />
            </div>
          </form>
          <div className='p-3 card-cont'>
            {
              loaded === false && ( <img className='image-random' src={Logo} />)
            }
            {loaded &&
              result.map((imagen, idx) =>(
                <>
                  <div className='img-cont'>
                    <img src={imagen.photo} key={idx} alt={imagen.namePlate} className={'image-random'} />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </>

              ))
            }
          </div>
        </div>
      </div>
      );
}


export default PlateRandom;