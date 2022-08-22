import React, { createContext, useState } from "react";
import { STEP1 } from "./components/Wizard/utils/constants";

export const WizardContext = createContext();

export const WizardContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(STEP1);
  const [wizardData, setWizardData] = useState();
  const [step1Done, setStep1Done] = useState(false);
  const [step2Done, setStep2Done] = useState(false);
  const [finished, setFinished] = useState(false);

  const wizardContextValues = {
    currentStep,
    setCurrentStep,
    wizardData,
    setWizardData,
    step1Done,
    setStep1Done,
    step2Done,
    setStep2Done,
    finished,
    setFinished,
  };

  return (
    <>
      <WizardContext.Provider value={wizardContextValues}>
        {children}
      </WizardContext.Provider>
    </>
  );
};
