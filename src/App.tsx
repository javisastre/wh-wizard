import React, { Component } from "react";

import Wizard from "./components/Wizard/Wizard";
import { WizardContextProvider } from "./components/Wizard/context/WizardContext";

class App extends Component {
  render() {
    return (
      <div>
        <WizardContextProvider>
          <Wizard />
        </WizardContextProvider>
      </div>
    );
  }
}

export default App;
