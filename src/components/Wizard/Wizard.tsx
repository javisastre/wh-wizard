import React from "react";

import { useWizardContext } from "./context/WizardContext";
import NavButtons from "./navigation/NavButtons";
import NavSteps from "./navigation/NavSteps";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

import { STEP1, STEP2, STEP3 } from "./utils/constants";

import "./Wizard.scss";

const Wizard = () => {
  const { currentStep } = useWizardContext();

  return (
    <div>
      <NavSteps />
      <main>
        {currentStep === STEP1 && <Step1 />}
        {currentStep === STEP2 && <Step2 />}
        {currentStep === STEP3 && <Step3 />}
      </main>
      <NavButtons />
    </div>
  );
};

export default Wizard;
