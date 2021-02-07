import React from "react";
import './App.css';
import TextMobileStepper from "./MobileStepper";
import BreakPointDown from "./HiddenComponents"



function App() {
  return (
    <div className="App">
      <TextMobileStepper />
      <br/>
      <BreakPointDown />
    </div>
  );
}

export default App;
