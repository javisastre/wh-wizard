import React from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { useWizardContext } from "../../context/WizardContext";
import { STEP1, STEP2, STEP3 } from "../../utils/constants";

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

  const isDisabled =
    (currentStep === STEP1 && step1Done) || (currentStep === STEP2 && step2Done)
      ? false
      : true;

  const createAccount = async () => {
    const { username, password, hint } = wizardData.step2;
    const userInfo = { username, password, hint };
    try {
      const { data } = await axios.post("/url", userInfo);
      if (data.status === 200) {
        setWizardData((prev) => ({
          ...prev,
          step3: { ...prev.step3, success: true },
        }));
      } else {
        setWizardData((prev) => ({
          ...prev,
          step3: { ...prev.step3, error: true },
        }));
      }
    } catch (error) {
      console.error(error);
      setWizardData((prev) => ({
        ...prev,
        step3: { ...prev.step3, error: true },
      }));
    } finally {
      setCurrentStep(STEP3);
    }
  };
  const isThis = (step: string) => currentStep === step;
  const stepForward = () =>
    currentStep === STEP1 ? setCurrentStep(STEP2) : createAccount();
  const stepBack = () =>
    currentStep === STEP2 ? setCurrentStep(STEP1) : setCurrentStep(STEP2);
  const startOver = () => {
    setCurrentStep(STEP1);
    setStep1Done(false);
    setStep2Done(false);
    setWizardData(initialWizardData);
  };

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
          {t("NEXT_BUTTON")} <i className='fa-solid fa-angle-right'></i>{" "}
          <i className='fa-solid fa-spinner'></i>
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
