import React from "react";
//Import Images or Logos
import logo from "../icons/EduLogo.ico";

const Home = ({ setPageStatus, pageStatus }) => {
  return (
    <div className="home">
      <div className="head">
        <h1>EduMemory</h1>
        <img alt="EduMemory logo" src={logo}></img>
      </div>
      <button onClick={() => setPageStatus(1)} className="play-button">
        Play
      </button>
      <button className="tutorial-button">How To Play</button>
      <button className="about-button">Tom's MYP</button>
    </div>
  );
};

export default Home;
