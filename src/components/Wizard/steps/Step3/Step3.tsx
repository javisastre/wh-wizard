import React from "react";

import successImg from "./../../../assets/img/success.png";
import errorImg from "./../../../assets/img/error.png";
import { useWizardContext } from "../../context/WizardContext";
import Message from "./Message";

const Step3 = () => {
  const {
    finished: { success, error },
  } = useWizardContext();

  return (
    <article className='step3'>
      <div>
        {success && !error ? (
          <img src={successImg} alt='success' />
        ) : (
          <img src={errorImg} alt='error' />
        )}
        <Message />
      </div>
    </article>
  );
};

export default Step3;
