import React, { useState } from "react";
//Adding Components
import Home from "./Components/Home";
import Game from "./Components/Game";
import Myp from "./Components/Myp";
import Tutorial from "./Components/Tutorial";
//Import Styles
import "./styles/app.scss";

function App() {
  const [pageStatus, setPageStatus] = useState(0);
  return ( test
    <div className="App">
      <Home pageStatus={pageStatus} setPageStatus={setPageStatus} />
      <Game pageStatus={pageStatus} />
      <Myp />
      <Tutorial />
    </div>
  );
}

export default App;
