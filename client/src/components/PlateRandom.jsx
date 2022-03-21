import axios from 'axios';
import React from 'react';
import { useState } from 'react';


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

        axios.get(`http://localhost:8000/api/getAll`)
        .then(({data})=> {
          console.log(data);
          setList(data);
        })
        .catch(err => console.log(err))

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
      <div className='container px-5 mt-4 border '>
        <h2 className="mb-3">Search by ingredients</h2>
        <form className="col-4 d-inline-block" onSubmit={Submit}>
          {InputsForm.map((input, idx) => (
            <div className="form-group" key={idx}>
              <label className="text-muted ">{input.label}</label>
              <input required type={input.type} className="form-control p-2"
                value={input.value} name={input.name}  onChange={IngredientChange}
              />
            </div>
          ))}
          <div className="mt-4">  
            <input className="btn btn-primary col-12 p-2 font-weight-bold" type={"submit"} value={"Search"} />
          </div>
        </form>
        <div className='m-2 d-inline-block align-top p-3'>
          <img src="" alt=""  style={{maxHeight:'400px', maxWidth:'300px'}} />
        </div>
      </div>
      );
}


export default PlateRandom;