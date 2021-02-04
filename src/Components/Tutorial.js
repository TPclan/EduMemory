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
          When you press play you will get some cards <br /> face down depending
          on the level you choose. <br /> Take a wild guess! Click on any card
          and make sure to <br /> remember what is on the other side of the
          card. <br /> Each card has a pair that goes with it, try to flip both
          cards
          <br /> in one turn. Theres a timer as well, try to beat your last
          time!
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
