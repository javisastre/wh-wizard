import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { useWizardContext } from "../../context/WizardContext";
import {
  errorObj,
  STEP1,
  STEP2,
  STEP3,
  successObj,
} from "../../utils/constants";

import { initialWizardData } from "../../utils/constants";

const Footer = () => {
  const { t } = useTranslation();
  const {
    currentStep,
    setCurrentStep,
    step1Done,
    setStep1Done,
    step2Done,
    setStep2Done,
    wizardData,
    setWizardData,
  } = useWizardContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createAccount = async () => {
    // WITH REAL BACKEND
    // const { username, password, hint } = wizardData.step2;
    // const userInfo = { username, password, hint };
    try {
      // const { data } = await axios.post("/backend-url", userInfo);
      // if (data.status === 200) setStep3(successObj);
      // else setStep3(errorObj);

      // FAKE BACKEND
      const { data } = await axios.get(
        "http://www.randomnumberapi.com/api/v1.0/random"
      );
      if (Number(data[0]) > 20)
        setWizardData((prev) => ({ ...prev, step3: successObj }));
      else setWizardData((prev) => ({ ...prev, step3: errorObj }));
    } catch (error) {
      setWizardData((prev) => ({ ...prev, step3: errorObj }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep3 = () => {
    setIsLoading(true);
    createAccount();
  };

  useEffect(() => {
    if (wizardData.step3.success || wizardData.step3.error) {
      setCurrentStep(STEP3);
    }
  }, [wizardData.step3, setCurrentStep]);

  const isThis = (step: string) => currentStep === step;
  const stepForward = () =>
    currentStep === STEP1 ? setCurrentStep(STEP2) : handleStep3();
  const stepBack = () =>
    currentStep === STEP2 ? setCurrentStep(STEP1) : setCurrentStep(STEP2);
  const startOver = () => {
    setCurrentStep(STEP1);
    setStep1Done(false);
    setStep2Done(false);
    setWizardData(initialWizardData);
  };

  const isDisabled =
    (currentStep === STEP1 && !step1Done) ||
    (currentStep === STEP2 && !step2Done) ||
    (currentStep === STEP2 && isLoading)
      ? true
      : false;

  return (
    <footer>
      <hr />
      <nav className='nav-container'>
        <button
          className={`btn back ${isThis(STEP1) ? "hidden" : ""}`}
          onClick={stepBack}
        >
          {t("BACK_BUTTON")}
        </button>
        <button
          className={`btn next ${isThis(STEP3) ? "none" : ""}`}
          disabled={isDisabled}
          onClick={stepForward}
        >
          {isLoading ? (
            <i className='fa-solid fa-spinner spinning'></i>
          ) : (
            <div>
              {t("NEXT_BUTTON")} <i className='fa-solid fa-angle-right'></i>
            </div>
          )}
        </button>
        <button
          className={`btn start ${isThis(STEP3) ? "" : "none"}`}
          onClick={startOver}
        >
          {t("START_OVER_BUTTON")}
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
