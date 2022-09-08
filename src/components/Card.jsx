import React from "react";
import "../style/Card.css";

const Card = ({ type, number, image }) => {
  return (
    <div className="macro__card">
      <img className="macro__img" src={image} alt="logo" />
      <div className="macro__content">
        {type === "Calories" ? (
          <p className="macro__number">{number.toLocaleString("en-IN")}kCal</p>
        ) : (
          <p className="macro__number">{number}g</p>
        )}
        <p className="macro__item">{type}</p>
      </div>
    </div>
  );
};

export default Card;