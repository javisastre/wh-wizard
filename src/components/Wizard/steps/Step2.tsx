import React, { useContext, useEffect, useState } from "react";

import { WizardContext } from "../../../WizardContext";
import PasswordInput from "../inputs/PasswordInput";
import TextareaInput from "../inputs/TextareaInput";
import TextInput from "../inputs/TextInput";

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
} from "../utils/interfaces";

const Step2 = () => {
  const { setStep2Done, setWizardData, wizardData } = useContext(WizardContext);

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

  useEffect(() => {
    setWizardData((prev) => ({ ...prev, step2: data }));
  }, [data, setStep2Done, setWizardData]);

  return (
    <div>
      Step2
      <div>
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
        <p>
          También puedes crear una pista que te ayude a recordar tu contraseña
        </p>
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
      </div>
    </div>
  );
};

export default Step2;
