import React from "react";
import "./MethodCard.css";

const MethodCard = (props) => {
  return (
    <>
      <div className="card ">
        <img src={props.src} alt="" />
      </div>
    </>
  );
};

export default MethodCard;
