import React, { useContext } from "react";
import { WizardContext } from "../../../WizardContext";
import { STEP1, STEP2, STEP3 } from "../utils/constants";
import { IWizardContextValues } from "../utils/interfaces";

const NavButtons = () => {
  const { currentStep, setCurrentStep, step1Done, step2Done } =
    useContext<IWizardContextValues>(WizardContext);

  const stepForward = () =>
    currentStep === STEP1 ? setCurrentStep(STEP2) : setCurrentStep(STEP3);
  const stepBack = () =>
    currentStep === STEP2 ? setCurrentStep(STEP1) : setCurrentStep(STEP2);

  return <div>NavButtons</div>;
};

export default NavButtons;
