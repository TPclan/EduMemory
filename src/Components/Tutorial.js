import React from "react";

import logo from "../icons/brain-2.svg";
import HomeButton from "../img/home-button.svg";

const Tutorial = ({ setPageStatus }) => {
  return (
    <div className="tutorial">
<<<<<<< HEAD
      <div className="home-button1">
        <button onClick={() => setPageStatus(0)} class="homeButton">
          <img className="homePic" src={HomeButton} alt="Home Button" />
=======
      <div>
        <button onClick={() => setPageStatus(0)} className="home-button">
          <img className="home-pic" src={HomeButton} alt="Home Button" />
>>>>>>> e318855ea0002bef5301c4da68a528178a2cdeb6
        </button>
      </div>
      <div className="logo-title-div">
        <h1 className="logo-title">EduMemory</h1>
        <img className="brain-logo" alt="EduMemory logo" src={logo}></img>
      </div>
      <div className="main-body">
        <h2>How do you play?</h2>
        <p>
          When you press play you will get 24 cards face down. <br /> Take a
          wild guess! Click on any card and make sure to remember what is on the
          other side of the card. <br /> Each card has a pair that goes with it,
          try to flip both cards in one turn. <br /> At the end of the game you
          will get a score, Easy starts at 100 points and each turn you lose 2
          points. <br /> Medium starts at 115, and Hard starts at 130 points,
          the less amount of turns it takes, the better the score!
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
