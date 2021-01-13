import React, { useState } from "react";
//Adding Components
import Home from "./Components/Home";
import Game from "./Components/Game";
import About from "./Components/About";
import Tutorial from "./Components/Tutorial";
//Import Styles
import "./styles/app.scss";

function App() {
  const [pageStatus, setPageStatus] = useState(0);
  return (
    <div className="App">
      <section>
        {(() => {
          switch (pageStatus) {
            case 1:
              return (
                <Game pageStatus={pageStatus} setPageStatus={setPageStatus} />
              );
            case 2:
              return (
                <Tutorial
                  pageStatus={pageStatus}
                  setPageStatus={setPageStatus}
                />
              );
            case 3:
              return (
                <About pageStatus={pageStatus} setPageStatus={setPageStatus} />
              );
            default:
              return (
                <Home pageStatus={pageStatus} setPageStatus={setPageStatus} />
              );
          }
        })()}
      </section>
    </div>
  );
}

export default App;
