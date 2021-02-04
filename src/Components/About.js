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
      </div>
      <div>
        <h2>About My App</h2>
        <p>
          Hello! My name is Tom, and this is my first <br />
          ever app, and the beginning of the creation <br />
          of several more in the future! This took a <br />
          while to make and I hope you enjoy it!
        </p>
        <h2>Credits:</h2>
        <p>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>{" "}
          is now my favorite code <br />
          editor for building <br />
          and debugging modern web <br />
          applications.
          <br />
          <a href="https://github.com" target="_blank" rel="noreferrer">
            {" "}
            GitHub
          </a>{" "}
          is a place to store and <br /> share my code.
          <br />
          <a href="https://developedbyed.com/" target="_blank" rel="noreferrer">
            This Course
          </a>{" "}
          helped me learn HTML <br /> and CSS.
          <br />
          <a href="https://watchandcode.com/" target="_blank" rel="noreferrer">
            This Course
          </a>{" "}
          helped me learn JavaScript. <br />
          <a
            href="https://reactjsexample.com/a-simple-memory-game-with-react-js/"
            target="_blank"
            rel="noreferrer"
          >
            This
          </a>{" "}
          is the memory game that I <br />
          based mine off of.
        </p>
      </div>
    </div>
  );
};

export default About;
