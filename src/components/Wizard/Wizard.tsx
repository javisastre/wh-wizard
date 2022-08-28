import React from "react";

import useStepSelector from "./hooks/useStepSelector";
import Footer from "./navigation/Footer/Footer";
import Header from "./navigation/Header/Header";
import MainTitle from "./navigation/MainTitle";

import "./Wizard.scss";

const Wizard = () => {
  const StepComponent = useStepSelector();

  return (
    <div>
      <Header />
      <main>
        <MainTitle />
        <StepComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Wizard;
