import React, { useState } from "react";

import Header from "./navigation/Header/Header";
import MainTitle from "./navigation/MainTitle/MainTitle";
import Step1 from "./steps/Step1/Step1";
import Step2 from "./steps/Step2/Step2";
import Step3 from "./steps/Step3/Step3";
import Footer from "./navigation/Footer/Footer";

import { STEP1, STEP2, STEP3 } from "./utils/constants";

import "./Wizard.scss";

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState<string>(STEP1);

  const isThis = (step: string) => currentStep === step;
  return (
    <div className='app-content'>
      <Header currentStep={currentStep} />
      <main>
        <MainTitle />
        {isThis(STEP1) && <Step1 />}
        {isThis(STEP2) && <Step2 />}
        {isThis(STEP3) && <Step3 />}
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default Wizard;
