import React from "react";
import { useWizardContext } from "../../context/WizardContext";

import Message from "./Message";
import Step404 from "../Step404";

import { successMessage, errorMessage } from "../../utils/constants";

import successImg from "./../../../../assets/img/success.png"; // "./../../../../assets/img/success.png";
import errorImg from "./../../../../assets/img/error.png";

const Step3 = () => {
  const { wizardData } = useWizardContext();
  const { success, error } = wizardData.step3;

  return (
    <article className='step3'>
      <div className='step3-content'>
        {success && !error && (
          <>
            <img src={successImg} alt='success' />
            <Message content={successMessage} />
          </>
        )}
        {!success && error && (
          <>
            <img src={errorImg} alt='error' />
            <Message content={errorMessage} />
          </>
        )}
        {!success && !error && <Step404 />}
      </div>
    </article>
  );
};

export default Step3;
