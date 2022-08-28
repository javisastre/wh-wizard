import React from "react";

import useStepSelector from "./hooks/useStepSelector";
import NavButtons from "./navigation/NavButtons";
import NavSteps from "./navigation/NavSteps";

import "./Wizard.scss";

const Wizard = () => {
  const StepComponent = useStepSelector();

  return (
    <div>
      <NavSteps />
      <main>
        <StepComponent />
      </main>
      <NavButtons />
    </div>
  );
};

export default Wizard;
