import React, { useContext, useEffect, useState } from "react";

import { WizardContext } from "../../../WizardContext";
import TextInput from "../inputs/TextInput";
import {
  initialStep2Error,
  validators,
  errorMessages,
} from "../utils/constants";
import { IStep2, IValidators, TInputsEvent } from "../utils/interfaces";

const Step2 = () => {
  const { setStep2Done, setWizardData, wizardData } = useContext(WizardContext);

  const [data, setData] = useState<IStep2>(wizardData.step2);
  const [error, setError] = useState<IStep2>(initialStep2Error);

  const validInput = (e: TInputsEvent) =>
    validators[e.target.name as keyof IValidators].test(e.target.value);

  const handleError = (e: TInputsEvent) =>
    setError({
      ...error,
      [e.target.name]: validInput(e)
        ? ""
        : errorMessages[e.target.name as keyof IStep2],
    });

  const handleInput = (e: TInputsEvent) => {
    setData({ ...data, [e.target.name]: e.target.value });
    handleError(e);
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
          value={data.username}
          error={error}
          handleInput={handleInput}
          handleError={handleError}
        />
        <label htmlFor='password'>Crea tu contraseña</label>
        <input
          id='password'
          name='password'
          type='text'
          placeholder='Crea tu contraseña'
          required
          minLength={8}
          maxLength={24}
          value={data.password}
          onChange={handleInput}
        />
        <label htmlFor='repeatpassword'>Repite tu contraseña</label>
        <input
          id='repeatpassword'
          name='repeatPassword'
          type='text'
          placeholder='Repite tu contraseña'
          required
          minLength={8}
          maxLength={24}
          value={data.repeatPassword}
          onChange={handleInput}
        />
        <p>
          También puedes crear una pista que te ayude a recordar tu contraseña
        </p>
        <label htmlFor='hint'>
          Crea tu pista para recordar tu contraseña (opcional)
        </label>
        <textarea
          id='hint'
          name='hint'
          placeholder='Introduce tu pista'
          minLength={0}
          maxLength={60}
          value={data.hint}
          onChange={handleInput}
        ></textarea>
      </div>
    </div>
  );
};

export default Step2;
