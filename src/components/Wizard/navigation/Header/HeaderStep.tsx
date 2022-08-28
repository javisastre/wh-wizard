import React from "react";
import { IHeaderStep } from "../../utils/interfaces";

const HeaderStep = ({ isThisStep, stepDone, label }: IHeaderStep) => {
  return (
    <div
      className={`step ${
        isThisStep ? "current bg-dark-green" : "not-current"
      } ${stepDone ? "bg-dark-green" : ""}`}
    >
      {stepDone ? <i className='fa-solid fa-check'></i> : <p>{label}</p>}
    </div>
  );
};

export default HeaderStep;
