import React from "react";
import HomeButton from "../img/home-button.svg";
import logo from "../icons/EduLogo.ico";

const Myp = ({ setPageStatus }) => {
  return (
    <div className="myp">
      <div className="home-button">
        <button onClick={() => setPageStatus(0)} class="homeButton">
          <img className="homePic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <h1>EduMemory</h1>
      <img alt="EduMemory logo" src={logo}></img>
      <div className="main-body">
        <h2>Tom's MYP Project</h2>
        <p>Talk about Myp.</p>
      </div>
    </div>
  );
};

export default Myp;
