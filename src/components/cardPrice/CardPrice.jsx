import React from "react";
import "./cardPrice.css";

const CardPrice = ({ text_title, price, devise, text, text_btn }) => {
  return (
    <div className="card-one">
      <div className="title">
        <h4>{text_title}</h4>
      </div>

      <div className="price">
        <p>{price}</p>
        {/* <p>$</p> */}
        <p>{devise}</p>
      </div>
      <div className="subtext">
        <p>{text}</p>
      </div>

      <button>{text_btn}</button>
    </div>
  );
};

export default CardPrice;
