import React, { useContext } from "react";
import { WizardContext } from "../WizardContext";

import Step1 from "./Wizard/steps/Step1";
import Step2 from "./Wizard/steps/Step2";
import Step3 from "./Wizard/steps/Step3";

import { STEP1, STEP2, STEP3 } from "./Wizard/utils/constants";
import { IWizardContextValues } from "./Wizard/utils/interfaces";

const Wizard = () => {
  const { currentStep } = useContext(WizardContext) as IWizardContextValues;

  return (
    <div>
      {currentStep === STEP1 && <Step1 />}
      {currentStep === STEP2 && <Step2 />}
      {currentStep === STEP3 && <Step3 />}
    </div>
  );
};

export default Wizard;
