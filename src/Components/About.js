import React from "react";
import HomeButton from "../img/home-button.svg";
import logo from "../icons/brain-2.svg";

const About = ({ setPageStatus }) => {
  return (
    <div className="about">
      <div>
        <button className="home-button" onClick={() => setPageStatus(0)}>
          <img className="home-pic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <div className="logo-title-div">
        <h1 className="logo-title">EduMemory</h1>
        <img className="brain-logo" alt="EduMemory logo" src={logo}></img>
      </div>
      <div>
        <h2>About My App</h2>
        <p>
          Hello! My name is Tom, and this is my first ever app, <br /> and the
          beginning of the creatore of several more in the future! <br /> This
          took a while to make and I hope you enjoy it! (Add Credits)
        </p>
      </div>
    </div>
  );
};

export default About;
