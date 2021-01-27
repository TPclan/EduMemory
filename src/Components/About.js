import React from "react";
import HomeButton from "../img/home-button.svg";
import logo from "../icons/brain-2.svg";

const About = ({ setPageStatus }) => {
  return (
    <div className="about">
      <div>
        <button onClick={() => setPageStatus(0)} className="home-button">
          <img className="home-pic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <div className="logo-title-div">
        <h1 className="logo-title">EduMemory</h1>
        <img className="brain-logo" alt="EduMemory logo" src={logo}></img>
      </div>
      <div className="main-body">
        <h2>About Page</h2>
        <p>About page here.</p>
      </div>
    </div>
  );
};

export default About;
