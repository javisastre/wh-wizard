import React, { useContext } from "react";
import { WizardContext } from "../../WizardContext";
import NavButtons from "./navigation/NavButtons";

import "./Wizard.scss";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

import { STEP1, STEP2, STEP3 } from "./utils/constants";
import { IWizardContextValues } from "./utils/interfaces";

const Wizard = () => {
  const { currentStep } = useContext(WizardContext) as IWizardContextValues;

  return (
    <div>
      {currentStep === STEP1 && <Step1 />}
      {currentStep === STEP2 && <Step2 />}
      {currentStep === STEP3 && <Step3 />}
      <NavButtons />
    </div>
  );
};

export default Wizard;
