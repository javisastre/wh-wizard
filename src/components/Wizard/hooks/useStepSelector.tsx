import React, { useCallback } from "react";
import { useWizardContext } from "../context/WizardContext";

import Step1 from "./../steps/Step1/Step1";
import Step2 from "./../steps/Step2/Step2";
import Step3 from "./../steps/Step3/Step3";
import Step404 from "./../steps/Step404";
import { STEP1, STEP2, STEP3 } from "../utils/constants";

const useStepSelector = () => {
  const { currentStep } = useWizardContext();

  const StepComponent = useCallback(() => {
    switch (currentStep) {
      case STEP1:
        return <Step1 />;
      case STEP2:
        return <Step2 />;
      case STEP3:
        return <Step3 />;
      default:
        return <Step404 />;
    }
  }, [currentStep]);

  return StepComponent;
};

export default useStepSelector;
