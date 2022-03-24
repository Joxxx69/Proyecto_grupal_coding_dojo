import React, { useState } from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddRecipe = () => {
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();
  const createRecipe = (recipe) => {
    axios
      .post("http://localhost:8000/api/createPlate", recipe)
      .then((res) => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };
  return (
    <Navbar>
      {errors.map((err, index) => (
        <p
          className="p-3 mb-2 bg-danger text-white text-center col-6 m-auto"
          key={index}
        >
          {err}
        </p>
      ))}
      <Form
        onSubmitProp={createRecipe}
        initialName=""
        initialProcedure=""
        initialIngredients=""
        initialPhoto=""
        initialTime=""
        initialPortions=""
      />
    </Navbar>
  );
};
export default AddRecipe;
