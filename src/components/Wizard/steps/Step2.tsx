import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import { WizardContext } from "../../../WizardContext";
import { IStep2, IWizardData } from "../utils/interfaces";

const Step2 = () => {
  const { setStep2Done, setWizardData, wizardData } = useContext(WizardContext);

  const [data, setData] = useState<IStep2>(wizardData.step2);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div>
      Step2
      <div>
        <label htmlFor='username'>Crea tu usuario</label>
        <input
          id='username'
          name='username'
          type='text'
          placeholder='Introduce tu usuario'
          minLength={3}
          value={data.username}
          onChange={handleInput}
        />
        <label htmlFor='password'>Crea tu contraseña</label>
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Crea tu contraseña'
          minLength={8}
          maxLength={24}
          value={data.password}
          onChange={handleInput}
        />
        <label htmlFor='repeatpassword'>Repite tu contraseña</label>
        <input
          type='text'
          id='repeatpassword'
          name='repeatPassword'
          placeholder='Repite tu contraseña'
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
