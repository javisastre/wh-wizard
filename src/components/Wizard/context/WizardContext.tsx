import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

import { initialFinished, initialWizardData, STEP1 } from "../utils/constants";
import {
  IWizardData,
  IWizardContextValues,
  IFinished,
} from "../utils/interfaces";

export const WizardContext = createContext<IWizardContextValues>(
  {} as IWizardContextValues
);

export const useWizardContext = () => useContext(WizardContext);

export const WizardContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [currentStep, setCurrentStep] = useState<string>(STEP1);
  const [wizardData, setWizardData] = useState<IWizardData>(initialWizardData);
  const [step1Done, setStep1Done] = useState<boolean>(false);
  const [step2Done, setStep2Done] = useState<boolean>(false);
  const [finished, setFinished] = useState<IFinished>(initialFinished);

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
