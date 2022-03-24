import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const UpdateRecipe = () => {
  //   const { id } = params;
  //   const { _id } = useParams();
  let params = useParams();
  let navigate = useNavigate();

  const [plate, setPlate] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/plate/one/" + params.id)
      .then((res) => {
        setPlate(res.data);
        setLoaded(true);
        console.log(res.data);
      });
  }, []);

  const UpdatePlate = (plate) => {
    axios
      .put("http://localhost:8000/api/update/" + params.id, plate)
      .then((res) => navigate("/"));
  };

  return (
    <Navbar>
      {loaded && (
        <div>
          {" "}
          <Form
            onSubmitProp={UpdatePlate}
            initialName={plate.nameplate}
            initialProcedure={plate.procedure}
            initialIngredients={plate.ingredients}
            initialPhoto={plate.photo}
            initialTime={plate.time}
            initialPortions={plate.portions}
          />
        </div>
      )}
    </Navbar>
  );
};
export default UpdateRecipe;
