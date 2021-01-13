import React from "react";
import HomeButton from "../img/home-button.svg";
import logo from "../icons/EduLogo.ico";

const About = ({ setPageStatus }) => {
  return (
    <div className="about">
      <div className="home-button">
        <button onClick={() => setPageStatus(0)} class="homeButton">
          <img className="homePic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <h1>EduMemory1</h1>
      <img alt="EduMemory logo" src={logo}></img>
      <div className="main-body">
        <h2>About Page</h2>
        <p>About page here.</p>
      </div>
    </div>
  );
};

export default About;
