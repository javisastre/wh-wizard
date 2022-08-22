import React, { Component } from "react";

import WheelHubLogo from "./assets/img/Logotipo-Vertical-Verde-Alta.png";

import "./App.scss";
import Wizard from "./components/Wizard";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Wizard />
      </div>
    );
  }
}

export default App;
