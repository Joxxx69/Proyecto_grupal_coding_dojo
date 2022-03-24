import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CarouselDisplay = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/getAllCategories").then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Carousel responsive={responsive}>
        {categories.map((val, idx) => {
          return (
            <div key={idx} className="card shadow" style={{ width: "18rem" }}>
              <img
                style={{ height: "12rem" }}
                className="card-img-top"
                src={val.photoUrl}
                alt="Foto de una receta"
              ></img>
              <div className="card-body row">
                <button
                  className="btn btn-outline-success "
                  onClick={(e) => navigate(`/recipes/${val.nameCategory}`)}
                >
                  {val.nameCategory}
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselDisplay;
