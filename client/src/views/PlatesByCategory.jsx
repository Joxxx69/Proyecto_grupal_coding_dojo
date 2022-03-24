import react, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardsPlates from "../components/PlatesCards";
import Navbar from "../components/Navbar";

const PlatesByCategory = (params) => {
  const { categoryName } = useParams();
  const [listRecipes, setListrecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getAll`)
      .then((res) =>
        setListrecipes(
          res.data.filter((val) => val.category.nameCategory === categoryName)
        )
      );
    // console.log(category);
  }, []);

  return (
    <Navbar>
      <h1>Categoría: {categoryName}</h1>
      <CardsPlates listRecipes={listRecipes}></CardsPlates>
    </Navbar>
  );
};
export default PlatesByCategory;
