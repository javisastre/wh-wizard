import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWizardContext } from "../../context/WizardContext";

import { createAccount } from "./footerHelper";
import FooterButton from "./FooterButton";

import { STEP1, STEP2, STEP3, initialWizardData } from "../../utils/constants";
import { IFooter } from "../../utils/interfaces";

const Footer = ({ currentStep, setCurrentStep }: IFooter) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { step1Done, setStep1Done, step2Done, setStep2Done, setWizardData } =
    useWizardContext();

  const handleStep3 = async () => {
    setIsLoading(true);
    await createAccount(setWizardData);
    setIsLoading(false);
    setCurrentStep(STEP3);
  };

  const isThis = (step: string) => currentStep === step;
  const stepForward = () =>
    isThis(STEP1) ? setCurrentStep(STEP2) : handleStep3();
  const stepBack = () =>
    isThis(STEP2) ? setCurrentStep(STEP1) : setCurrentStep(STEP2);
  const startOver = () => {
    setCurrentStep(STEP1);
    setStep1Done(false);
    setStep2Done(false);
    setWizardData(initialWizardData);
  };

  const isDisabled =
    (isThis(STEP1) && !step1Done) ||
    (isThis(STEP2) && !step2Done) ||
    (isThis(STEP2) && isLoading)
      ? true
      : false;
  const isNext = isLoading ? (
    <i className='fa-solid fa-spinner spinning'></i>
  ) : (
    <div>
      {t("NEXT_BUTTON")} <i className='fa-solid fa-angle-right'></i>
    </div>
  );

  return (
    <footer>
      <hr />
      <nav className='nav-container'>
        <FooterButton
          label={t("BACK_BUTTON")}
          addClass={`back ${isThis(STEP1) ? "hidden" : ""}`}
          handleClick={stepBack}
        />
        <FooterButton
          label={isNext}
          addClass={`next ${isThis(STEP3) ? "none" : ""}`}
          isDisabled={isDisabled}
          handleClick={stepForward}
        />
        <FooterButton
          addClass={`start ${isThis(STEP3) ? "" : "none"}`}
          handleClick={startOver}
          label={t("START_OVER_BUTTON")}
        />
      </nav>
    </footer>
  );
};

export default Footer;
