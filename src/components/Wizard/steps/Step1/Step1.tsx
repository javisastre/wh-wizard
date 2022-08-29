import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useWizardContext } from "../../context/WizardContext";
import { IStep1 } from "../../utils/interfaces";

import logoWheelHub from "./../../../../assets/img/Logotipo-Vertical-Verde-Alta.png";

const Step1 = () => {
  const { t } = useTranslation();

  const { setStep1Done, wizardData, setWizardData } = useWizardContext();

  const [data, setData] = useState<IStep1>(wizardData.step1);

  const handleData = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, confirmPrivacy: e.target.checked });

  useEffect(() => {
    const isAllDataCorrect = () => (data.confirmPrivacy ? true : false);

    setWizardData((prev) => ({ ...prev, step1: data }));
    setStep1Done(isAllDataCorrect() ? true : false);
  }, [data, setStep1Done, setWizardData]);

  return (
    <article className='step1'>
      <div className='logo'>
        <img src={logoWheelHub} alt='logo WheelHub' />
      </div>
      <div>
        <h2>{t("STEP1_TITLE")}</h2>
        <p>{t("STEP1_EXPLANATION1")}</p>
        <p>{t("STEP1_EXPLANATION2")}</p>
        <p>{t("STEP1_EXPLANATION3")} </p>
      </div>
      <div className='input-container'>
        <label htmlFor='confirmPrivacy'>
          <input
            id='confirmPrivacy'
            name='confirmPrivacy'
            type='checkbox'
            checked={data.confirmPrivacy}
            onChange={handleData}
          />
          <div className='checkmark'>
            <div className='inner'></div>
          </div>
          <p>{t("STEP1_CONSENT")}</p>
        </label>
      </div>
    </article>
  );
};

export default Step1;
