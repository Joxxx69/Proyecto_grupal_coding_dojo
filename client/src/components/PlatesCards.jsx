import React from "react";
import "./platesCards.css";

const CardsPlates = ({ listRecipes }) => {
  console.log(listRecipes);
  return (
    <div className="row">
      {listRecipes.map((image, idx) => (
        <div key={idx} className="col-lg-4 col-md-6 col-sm-6 border ">
          <div className="img-cont mt-3 mr-0">
            <img
              src={image.photo}
              key={idx}
              alt={image.namePlate}
              className={"image-random"}
            />
          </div>
          <ul className="p-3 m-0">
            <li className="d-block text-center">
              <h5 className="text-uppercase">{image.nameplate}</h5>
            </li>
            <li className=" d-inline-block mx-3">
              <span>{image.time} Minutes </span>
              <i className="material-icons-outlined align-bottom">
                {" "}
                query_builder
              </i>
            </li>
            <li className="d-inline-block mx-2 ">
              <span>{image.portions} Porsions </span>
              <i className="material-icons-outlined align-bottom"> people</i>
            </li>
            <li className="d-inline-block mx-3 ">
              <span className="text-capitalize">
                {image.category[0].nameCategory}{" "}
              </span>
              <i className="material-icons-outlined align-bottom">
                {" "}
                restaurant
              </i>
            </li>
          </ul>
          <button className="btn btn-primary p-2 m-2">ver mas</button>
        </div>
      ))}
    </div>
  );
};

export default CardsPlates;
