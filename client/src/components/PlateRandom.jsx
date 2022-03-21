import axios from 'axios';
import React from 'react';
import { useState } from 'react';


const PlateRandom = () => {

    const [ingredients, setIngredients]=useState({
        ingredient1:'',
        ingredient2:'',
        ingredient3:''
    });


    const {ingredient1, ingredient2, ingredient3}= ingredients;

    
    const IngredientChange = (e) => {
        setIngredients({...ingredients, [e.target.name]:e.target.value});
      };

    const Submit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/api/getRandom/${ingredient1}/${ingredient2}/${ingredient3}`)
        .then(({data})=> console.log(data))
        .catch(err => console.log('there was an error', err))

        axios.get(`http://localhost:8000/api/getAll`)
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))

    };

    const InputsForm=[
        {name:"ingredient1" , value: ingredient1, type:"text", label: "ingredient 1:"},
        {name:"ingredient2" , value: ingredient2, type:"text", label: "ingredient 2:"},
        {name:"ingredient3" , value: ingredient3, type:"text", label: "ingredient 3:"}
    ]


    return (
        <form className="container" onSubmit={Submit}>
          <h2 className="mb-3">Search by ingredients</h2>
          {InputsForm.map((input, idx) => (
            <div className="form-group" key={idx}>
              <label className="text-muted">{input.label}</label>
              <input
                required
                type={input.type}
                className="form-control p-4"
                value={input.value}
                name={input.name}
                onChange={IngredientChange}
              />
            </div>
          ))}
          <div className="mt-5">  
            <input
              className="btn btn-primary col-12 p-2 font-weight-bold"
              type={"submit"}
              value={"Search"}
            ></input>
          </div>
        </form>
      );
}


export default PlateRandom;