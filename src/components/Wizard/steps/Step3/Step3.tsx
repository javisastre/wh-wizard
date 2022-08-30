import React from "react";
import { useTranslation } from "react-i18next";

import { useWizardContext } from "../../context/WizardContext";
import Message from "./Message";
import Step404 from "../Step404";

import successImg from "./../../../../assets/img/success.png"; // "./../../../../assets/img/success.png";
import errorImg from "./../../../../assets/img/error.png";

const Step3 = () => {
  const { t } = useTranslation();

  const {
    finished: { success, error },
  } = useWizardContext();

  const successMessage = {
    title: t("STEP3_SUCCESS_TITLE"),
    body: t("STEP3_SUCCESS_BODY"),
  };
  const errorMessage = {
    title: t("STEP3_ERROR_TITLE"),
    body: t("STEP3_ERROR_BODY"),
  };

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
