import React, { ChangeEvent, useEffect, useState } from "react";

import { useWizardContext } from "../../context/WizardContext";
import { IStep1 } from "../../utils/interfaces";

import logoWheelHub from "./../../../assets/img/Logotipo-Vertical-Verde-Alta.png";

const Step1 = () => {
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
        <h2>¿Qué deberá realizar?</h2>
        <p>
          En la primera prestaña, deberá confirmar que es mayor de edad y acepta
          el tratamiento de sus datos según la política de datos vigentes.
        </p>
        <p>
          En la segunda pestaña, deberá crear un usuario, una contraseña y una
          pista para recordar la contraseña (como dato opcional).
        </p>
        <p>
          En tercer lugar, deberá visualizarse el mensaje de éxito de creación.
        </p>
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
          <p>
            Confirma que es mayor de edad, y acepta el tratamiento de sus datos
            según la política de protección de datos vigente.
          </p>
        </label>
      </div>
    </article>
  );
};

export default Step1;
