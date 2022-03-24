import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <Link
                  to={`/recipes/${val.nameCategory}`}
                  className="card-title link-success"
                >
                  {val.nameCategory}
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselDisplay;
