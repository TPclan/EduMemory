import React from "react";

const Game = ({ pageStatus }) => {
  return (
    <div className={`game ${pageStatus ? "active-game" : ""}`}>
      <h1>EduMemory</h1>
      <h2>Game</h2>
    </div>
  );
};

export default Game;
