import React from "react";
import "./plan.css";
import verifier from "../../assets/verifier.png";

const Plan = ({ plan }) => {
  return (
    <div className="container-card">
      <div className="content-card">
        <div className="content-title">
          <div className="img">
            <img src={verifier} alt="" />
          </div>
          <p>{plan.title}</p>
        </div>
        <p>{plan.subtitle}</p>
      </div>
    </div>
  );
};

export default Plan;
