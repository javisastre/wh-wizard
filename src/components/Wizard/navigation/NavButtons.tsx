import React, { useContext } from "react";

import { WizardContext } from "../../../WizardContext";
import { STEP1, STEP2, STEP3 } from "../utils/constants";
import { IWizardContextValues } from "../utils/interfaces";

import { initialWizardData } from "../utils/constants";

const NavButtons = () => {
  const {
    currentStep,
    setCurrentStep,
    step1Done,
    setStep1Done,
    step2Done,
    setStep2Done,
    setWizardData,
  } = useContext<IWizardContextValues>(WizardContext);

  const stepForward = () =>
    currentStep === STEP1 ? setCurrentStep(STEP2) : setCurrentStep(STEP3);
  const stepBack = () =>
    currentStep === STEP2 ? setCurrentStep(STEP1) : setCurrentStep(STEP2);
  const startOver = () => {
    setCurrentStep(STEP1);
    setStep1Done(false);
    setStep2Done(false);
    setWizardData(initialWizardData);
  };

  return (
    <div>
      <hr />
      <nav className='nav-elements'>
        <button
          className={`simple-btn ${currentStep === STEP1 ? "hidden" : ""}`}
          onClick={stepBack}
        >
          Atrás
        </button>
        <button
          className={`${currentStep === STEP3 ? "none" : ""}`}
          disabled={
            (currentStep === STEP1 && step1Done) ||
            (currentStep === STEP2 && step2Done)
              ? false
              : true
          }
          onClick={stepForward}
        >
          Siguiente
        </button>
        <button
          className={`${currentStep === STEP3 ? "" : "none"}`}
          onClick={startOver}
        >
          Volver al inicio
        </button>
      </nav>
    </div>
  );
};

export default NavButtons;
