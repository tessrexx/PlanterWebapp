import React from "react";
import "./HomeCard.css";

const HomeCard = ({ title, image, info }) => {
  return (
    <div className="infoCard">
      <img className="infoImage" src={image} />
      <h3 className="title">{title}</h3>
      <p className="info">{info}</p>{" "}
    </div>
  );
};

export default HomeCard;
