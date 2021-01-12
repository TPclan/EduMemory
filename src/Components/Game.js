// import React from "react";
import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

export default function Game() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    // Loads when the game starts
  }, [])


const Game = ({ setPageStatus, pageStatus }) => {
  return (
    <div className={`game ${pageStatus ? "active-game" : ""}`}>
      <button className="home-button" onClick={() => setPageStatus(0)}>
        Go Home
      </button>
      <h1>EduMemory</h1>
      <h2>Game</h2>
    </div>
  );
};

export default Game;
