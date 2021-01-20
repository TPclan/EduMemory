import React from "react";
//Import Images or Logos
import logo from "../icons/brain-2.svg";

const Home = ({ setPageStatus, pageStatus }) => {
  return (
    <div className="home">
      <div className="head">
        <h1>EduMemory</h1>
        <img className="brain-img" alt="EduMemory logo" src={logo}></img>
      </div>
      <button onClick={() => setPageStatus(1)}>Play</button>
      <button onClick={() => setPageStatus(2)}>How To Play</button>
      <button onClick={() => setPageStatus(3)}>About</button>
    </div>
  );
};

export default Home;
