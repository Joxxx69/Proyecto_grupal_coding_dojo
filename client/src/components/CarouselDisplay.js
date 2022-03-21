import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  const [plates, setPlates] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/getAllCategories").then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/api/getAll").then((res) => {
      setPlates(res.data);
      console.log(res.data);
    });
  }, []);

  // const clickHandler = () => {
  //   setca;
  // };

  return (
    <div>
      <Carousel responsive={responsive}>
        {categories.map((val, idx) => {
          return (
            <a
              onClick={(e) => {
                setNameCategory(val.nameCategory);
                setIsDisplayed(true);
              }}
              key={idx}
              href="#"
              className="card link-success"
              style={{ width: "18rem" }}
            >
              <img
                style={{ height: "12rem" }}
                className="card-img-top"
                src={val.photoUrl}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{val.nameCategory}</h5>
              </div>
            </a>
          );
        })}
      </Carousel>

      {isDisplayed && (
        <div
          style={{ height: "30rem" }}
          className=" row border border-dark overflow-auto"
        >
          <h1>Categoria: {nameCategory} </h1>

          {isDisplayed &&
            plates
              .filter((val) => val.category.nameCategory === nameCategory)
              .map((val, idx) => {
                return (
                  <div key={idx} className="col-sm-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        style={{ height: "12rem" }}
                        className="card-img-top"
                        src={val.photo}
                        alt="Card image cap"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#" className="link-success">
                            {val.nameplate}
                          </a>
                        </h5>
                        <p className="card-text ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus dui sit amet mi mollis, id
                          pellentesque leo gravida.
                        </p>
                        {/* <a href="#" className="btn btn-outline-info">
                          Favorito
                        </a> */}
                        <h4>Porciones: {val.portions} </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};
export default CarouselDisplay;
