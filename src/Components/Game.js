import React from "react";

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
