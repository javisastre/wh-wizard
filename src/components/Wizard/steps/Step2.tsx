import React, { useCallback, useEffect, useState } from "react";

import { useWizardContext } from "../context/WizardContext";
import PasswordInput from "./inputs/PasswordInput";
import TextareaInput from "./inputs/TextareaInput";
import TextInput from "./inputs/TextInput";

import {
  initialErrorMessages,
  validators,
  errorMessages,
} from "../utils/constants";
import {
  IErrorMessages,
  IStep2,
  IValidators,
  TInputsEvent,
  TStep2Fields,
} from "../utils/interfaces";

const Step2 = () => {
  const { setStep2Done, setWizardData, wizardData } = useWizardContext();

  const [data, setData] = useState<IStep2>(wizardData.step2);
  const [error, setError] = useState<IErrorMessages>(initialErrorMessages);

  const validInput = (e: TInputsEvent) =>
    validators[e.target.name as keyof IValidators].test(e.target.value);

  const handleError = (e: TInputsEvent) =>
    setError({
      ...error,
      [e.target.name]: validInput(e)
        ? ""
        : errorMessages[e.target.name as keyof IErrorMessages],
    });

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
        label='Crea tu usuario'
        placeholder='Introduce tu usuario'
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
          label='Crea tu contraseña'
          placeholder='Crea tu contraseña'
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
          label='Repite tu contraseña'
          placeholder='Repite tu contraseña'
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
        <p>
          También puedes crear una pista que te ayude a recordar tu contraseña
        </p>
        <i className='fa-solid fa-circle-info'></i>
      </div>
      <TextareaInput
        name='hint'
        label='Crea tu pista para recordar tu contraseña (opcional)'
        placeholder='Introduce tu pista'
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
