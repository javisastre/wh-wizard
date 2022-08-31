import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWizardContext } from "../../context/WizardContext";

import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import TextareaInput from "./TextareaInput";

import {
  initialErrorMessages,
  validators,
  errorMessagesDB,
} from "../../utils/constants";
import {
  IErrorMessages,
  IErrorMessagesDB,
  IStep2,
  IValidators,
  TInputsEvent,
  TStep2Fields,
} from "../../utils/interfaces";

const Step2 = () => {
  const { t } = useTranslation();
  const { setStep2Done, setWizardData, wizardData } = useWizardContext();

  const [data, setData] = useState<IStep2>(wizardData.step2);
  const [error, setError] = useState<IErrorMessages>(initialErrorMessages);

  const validInput = (e: TInputsEvent) =>
    e.target.name === "repeatPassword"
      ? data.password === e.target.value
      : validators[e.target.name as keyof IValidators].test(e.target.value);

  const handleError = (e: TInputsEvent) => {
    const inputName = e.target.name as keyof IErrorMessagesDB;

    const errorMessage =
      e.target.value === ""
        ? errorMessagesDB[inputName].empty
        : !validInput(e)
        ? errorMessagesDB[inputName].invalid
        : "";

    setError({
      ...error,
      [e.target.name]: errorMessage,
    });
  };

  const handleInput = (e: TInputsEvent) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name !== "hint") handleError(e);
  };

  const isAllDataCorrect = useCallback(() => {
    const checkPasswords = () =>
      data.password === data.repeatPassword ? true : false;

    const checkField = (field: TStep2Fields) =>
      error[field] === "" && data[field] !== "" ? true : false;

    return checkPasswords() &&
      checkField("username") &&
      checkField("password") &&
      checkField("repeatPassword")
      ? true
      : false;
  }, [data, error]);

  useEffect(() => {
    setWizardData((prev) => ({ ...prev, step2: data }));

    setStep2Done(isAllDataCorrect() ? true : false);
  }, [data, setStep2Done, setWizardData, isAllDataCorrect]);

  return (
    <article className='step2'>
      <TextInput
        name='username'
        label={t("STEP2_USER_LABEL")}
        placeholder={t("STEP2_USER_PLACEHOLDER")}
        required={true}
        min={3}
        value={data.username}
        error={error.username}
        handleInput={handleInput}
        handleError={handleError}
      />
      <div className='two-passwords'>
        <PasswordInput
          name='password'
          label={t("STEP2_PASS_LABEL")}
          placeholder={t("STEP2_PASS_PLACEHOLDER")}
          required={true}
          min={8}
          max={24}
          value={data.password}
          error={error.password}
          handleInput={handleInput}
          handleError={handleError}
        />
        <PasswordInput
          name='repeatPassword'
          label={t("STEP2_REPASS_LABEL")}
          placeholder={t("STEP2_REPASS_PLACEHOLDER")}
          required={true}
          min={8}
          max={24}
          value={data.repeatPassword}
          error={error.repeatPassword}
          handleInput={handleInput}
          handleError={handleError}
        />
      </div>
      <div className='hint-label'>
        <p>{t("STEP2_EXPLANATION")}</p>
      </div>
      <TextareaInput
        name='hint'
        label={t("STEP2_HINT_LABEL")}
        placeholder={t("STEP2_HINT_PLACEHOLDER")}
        min={0}
        max={60}
        required={false}
        value={data.hint}
        handleInput={handleInput}
      />
    </article>
  );
};

export default Step2;
