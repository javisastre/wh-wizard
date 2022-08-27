import React, {
  ReactNode,
  createContext,
  useState,
  PropsWithChildren,
} from "react";
import { initialWizardData, STEP1 } from "./components/Wizard/utils/constants";
import {
  IWizardData,
  IWizardContextValues,
} from "./components/Wizard/utils/interfaces";

export const WizardContext = createContext<IWizardContextValues>(
  {} as IWizardContextValues
);

export const WizardContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [currentStep, setCurrentStep] = useState<string>(STEP1);
  const [wizardData, setWizardData] = useState<IWizardData>(initialWizardData);
  const [step1Done, setStep1Done] = useState<boolean>(false);
  const [step2Done, setStep2Done] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  const wizardContextValues: IWizardContextValues = {
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
    <WizardContext.Provider value={wizardContextValues}>
      {children}
    </WizardContext.Provider>
  );
};
