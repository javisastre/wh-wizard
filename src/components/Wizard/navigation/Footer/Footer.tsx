import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useWizardContext } from "../../context/WizardContext";

import {
  STEP1,
  STEP2,
  STEP3,
  successObj,
  errorObj,
  initialWizardData,
} from "../../utils/constants";
import { IFooter } from "../../utils/interfaces";

const Footer = ({ currentStep, setCurrentStep }: IFooter) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { step1Done, setStep1Done, step2Done, setStep2Done, setWizardData } =
    useWizardContext();

  const createAccount = async () => {
    // REAL BACKEND
    // const { username, password, hint } = wizardData.step2;
    // const userInfo = { username, password, hint };
    try {
      // const { data } = await axios.post("/backend-url", userInfo);
      // if (data.status === 200) ((prev) => ({ ...prev, step3: successObj }));
      // else ((prev) => ({ ...prev, step3: errorObj }));

      // FAKE BACKEND
      const { data } = await axios.get(
        "http://www.randomnumberapi.com/api/v1.0/random"
      );
      if (Number(data[0]) > 10)
        setWizardData((prev) => ({ ...prev, step3: successObj }));
      else setWizardData((prev) => ({ ...prev, step3: errorObj }));
    } catch (error) {
      setWizardData((prev) => ({ ...prev, step3: errorObj }));
    } finally {
    }
  };
  const handleStep3 = async () => {
    setIsLoading(true);
    await createAccount();
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
