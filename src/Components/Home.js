import React from "react";
//Import Images or Logos
//Temporarily disable logo. throwing error when going live
// Need to change this back later: <img alt="EduMemory logo" src={logo}></img>
//import logo from "../icons/EduLogo.ico";

const Home = ({ setPageStatus, pageStatus }) => {
  return (
    <div className="home">
      <div className="head">
        <h1>EduMemory</h1>
        {/* <img alt="EduMemory logo" src={logo}></img> */}
      </div>
      <button onClick={() => setPageStatus(1)}>Play</button>
      <button onClick={() => setPageStatus(2)}>How To Play</button>
      <button onClick={() => setPageStatus(3)}>Tom's MYP</button>
    </div>
  );
};

export default Home;
