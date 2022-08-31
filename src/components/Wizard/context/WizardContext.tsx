import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

import { initialWizardData } from "../utils/constants";
import { IWizardData, IWizardContextValues } from "../utils/interfaces";

export const WizardContext = createContext<IWizardContextValues>(
  {} as IWizardContextValues
);

export const useWizardContext = () => useContext(WizardContext);

export const WizardContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [wizardData, setWizardData] = useState<IWizardData>(initialWizardData);
  const [step1Done, setStep1Done] = useState<boolean>(false);
  const [step2Done, setStep2Done] = useState<boolean>(false);

  const wizardContextValues: IWizardContextValues = {
    wizardData,
    setWizardData,
    step1Done,
    setStep1Done,
    step2Done,
    setStep2Done,
  };

  return (
    <WizardContext.Provider value={wizardContextValues}>
      {children}
    </WizardContext.Provider>
  );
};
