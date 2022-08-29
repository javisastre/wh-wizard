import React from "react";

import successImg from "./../../../../assets/img/success.png";
import errorImg from "./../../../../assets/img/error.png";
import { useWizardContext } from "../../context/WizardContext";
import Message from "./Message";
import Step404 from "../Step404";

const Step3 = () => {
  const {
    finished: { success, error },
  } = useWizardContext();

  const successMessage = {
    title: "¡La cuenta de creó correctamente!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius. Dignissim cras tincidunt lobortis feugiat vivamus at. Id neque aliquam vestibulum morbi blandit cursus. Nulla pharetra diam sit amet nisl suscipit adipiscing.",
  };
  const errorMessage = {
    title: "Ha habido un error al crear tu cuenta",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius. Dignissim cras tincidunt lobortis feugiat vivamus at. Id neque aliquam vestibulum morbi blandit cursus. Nulla pharetra diam sit amet nisl suscipit adipiscing.",
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
