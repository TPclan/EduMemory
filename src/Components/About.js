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
          beginning of the creation of several more in the future! <br /> This
          took a while to make and I hope you enjoy it!
        </p>
        <h2>Credits:</h2>
        <p>
          I used{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>{" "}
          to write my code for this project. <br />I used{" "}
          <a href="https://github.com" target="_blank">
            {" "}
            GitHub
          </a>{" "}
          to store and share my code.
          <br />I used{" "}
          <a href="https://developedbyed.com/" target="_blank" rel="noreferrer">
            This Coarse
          </a>{" "}
          to help me learn HTML and CSS.
          <br />I used{" "}
          <a href="https://watchandcode.com/" target="_blank" rel="noreferrer">
            This Coarse
          </a>{" "}
          to help me learn JavaScript. <br />
          <a
            href="https://reactjsexample.com/a-simple-memory-game-with-react-js/"
            target="_blank"
            rel="noreferrer"
          >
            This
          </a>{" "}
          is the memory game that I based mine off of.
        </p>
      </div>
    </div>
  );
};

export default About;
