import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import { WizardContext } from "../../../WizardContext";
import { IStep1 } from "../utils/interfaces";

const Step1 = () => {
  const { setStep1Done, wizardData, setWizardData } = useContext(WizardContext);

  const [data, setData] = useState<IStep1>(wizardData.step1);

  const handleData = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, confirmPrivacy: e.target.checked });

  useEffect(() => {
    const isAllDataFilled = () => (data.confirmPrivacy ? true : false);

    isAllDataFilled() && setStep1Done(isAllDataFilled());
    setWizardData((prev) => ({ ...prev, step1: data }));
  }, [data, setStep1Done, setWizardData]);

  return (
    <div>
      <h2>step1</h2>
      <div>
        <h6>¿Qué deberá realizar?</h6>
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
      <input
        id='confirmPrivacy'
        name='confirmPrivacy'
        type='checkbox'
        checked={data.confirmPrivacy}
        onChange={handleData}
      />
      <label htmlFor='confirmPrivacy'>
        Confirma que es mayor de edad, y acepta el tratamiento de sus datos
        según la política de protección de datos vigente.
      </label>
    </div>
  );
};

export default Step1;
