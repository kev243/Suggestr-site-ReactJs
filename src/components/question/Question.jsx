import React, { useState } from "react";
import "./question.css";
import plus from "../../assets/plus.png";
import closed from "../../assets/closed.png";

const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question-container">
      <div className="question-content">
        <h4 className={isOpen ? "text-title-color" : "text-title"}>
          {question.title}
        </h4>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={closed} alt="" /> : <img src={plus} alt="" />}
        </button>
      </div>

      {isOpen ? <p>{question.info}</p> : ""}
    </div>
  );
};

export default Question;
