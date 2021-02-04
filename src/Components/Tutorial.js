import React from "react";

import logo from "../icons/brain-2.svg";
import HomeButton from "../img/home-button.svg";

const Tutorial = ({ setPageStatus }) => {
  return (
    <div className="tutorial">
      <div>
        <button onClick={() => setPageStatus(0)} className="home-button">
          <img className="home-pic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <div className="logo-title-div">
        <h1 className="logo-title">EduMemory</h1>
      </div>
      <div>
        <h2>How do you play?</h2>
        <p>
          When you press play you will get some <br />
          cards face down depending on the <br />
          level you choose. Take a wild guess! <br />
          Click on any card and make sure to <br />
          remember what is on the other side <br />
          of the card. Each card has a pair <br />
          that goes with it, try to flip both <br />
          cards in one turn. Theres a timer as <br />
          well, try to beat your last time!
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
