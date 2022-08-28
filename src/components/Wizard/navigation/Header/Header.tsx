import React from "react";

import { useWizardContext } from "../../context/WizardContext";
import HeaderStep from "./HeaderStep";
import HeaderBars from "./HeaderBars";
import HeaderTriangle from "./HeaderTriangle";

import { STEP1, STEP2, STEP3 } from "../../utils/constants";

const Header = () => {
  const { currentStep, step1Done, step2Done, finished } = useWizardContext();

  const isThis = (step: string) => currentStep === step;

  return (
    <header className='header-container'>
      <div className='steps-container'>
        <HeaderStep label='1' isThisStep={isThis(STEP1)} stepDone={step1Done} />
        <HeaderStep label='2' isThisStep={isThis(STEP2)} stepDone={step2Done} />
        <HeaderStep label='3' isThisStep={isThis(STEP3)} stepDone={finished} />
      </div>
      <div className='hr-bars-container'>
        <HeaderBars
          isStep1={isThis(STEP1)}
          step2Done={step2Done}
          isStep3={isThis(STEP3)}
        />
      </div>
      <div className='triangle-container'>
        <HeaderTriangle isStep1={isThis(STEP1)} isStep2={isThis(STEP2)} />
      </div>
    </header>
  );
};

export default Header;
