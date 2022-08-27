import React, { Component } from "react";

// import WheelHubLogo from "./assets/img/Logotipo-Vertical-Verde-Alta.png";

import "./App.scss";
import Wizard from "./components/Wizard/Wizard";
import { WizardContextProvider } from "./WizardContext";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <WizardContextProvider>
          <Wizard />
        </WizardContextProvider>
      </div>
    );
  }
}

export default App;
