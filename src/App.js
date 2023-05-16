import React from "react";
import { Card1 } from "./components/Card1";
import { Navbar } from "./components/Navbar";
import { Communication } from "./components/Communication";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Card1/>
      <Communication />
    </div>
  );
}

export default App;
