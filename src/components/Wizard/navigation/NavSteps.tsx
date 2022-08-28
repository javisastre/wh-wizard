import React from "react";

import { useWizardContext } from "../context/WizardContext";
import { STEP1, STEP2, STEP3 } from "../utils/constants";

const NavSteps = () => {
  const { currentStep, step1Done, step2Done } = useWizardContext();

  const isThis = (step: string) => currentStep === step;

  return (
    <header className='nav-steps'>
      <div className='nav-elements-container'>
        <div
          className={`step ${isThis(STEP1) ? "current" : "not-current"} ${
            step1Done ? "bg-dark-green" : "bg-grey"
          }`}
        >
          {step1Done ? <i className='fa-solid fa-check'></i> : <p>1</p>}
        </div>
        <div
          className={`step ${
            isThis(STEP2) ? "current bg-dark-green" : "not-current"
          } ${step2Done ? "bg-dark-green" : "bg-grey"}`}
        >
          {step2Done ? <i className='fa-solid fa-check'></i> : <p>2</p>}
        </div>
        <div
          className={`step bg-grey ${
            isThis(STEP3) ? "current" : "not-current"
          }`}
        >
          <p>3</p>
        </div>
      </div>
      <div className='nav-hr-container'>
        <div className='nav-hr'>
          <hr className={`${!isThis(STEP1) ? "hr-green" : "hr-grey"}`} />
          <hr className={`${!isThis(STEP3) ? "hr-grey" : "hr-green"}`} />
        </div>
      </div>
      <div className='nav-triangle-container'>
        <div className='nav-triangle'>
          <div
            className={`triangle ${
              isThis(STEP1)
                ? "nav-triangle-left"
                : isThis(STEP2)
                ? "nav-triangle-center"
                : "nav-triangle-right"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default NavSteps;
