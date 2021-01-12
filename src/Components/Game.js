import React from "react";
import Card1 from "../img/cartoon-animals/card-1.png";
import Card2 from "../img/cartoon-animals/card-2.png";
import Card3 from "../img/cartoon-animals/card-3.png";
import Card4 from "../img/cartoon-animals/card-4.png";
import Card5 from "../img/cartoon-animals/card-5.png";
import Card6 from "../img/cartoon-animals/card-6.png";
import Card7 from "../img/cartoon-animals/card-7.png";
import Card8 from "../img/cartoon-animals/card-8.png";
import Card9 from "../img/cartoon-animals/card-9.png";
import Card14 from "../img/cartoon-animals/card-14.png";
import Card11 from "../img/cartoon-animals/card-11.png";
import Card12 from "../img/cartoon-animals/card-12.png";
import HomeButton from "../img/home-button.svg";

const Game = ({ setPageStatus }) => {
  return (
    <div className="game">
      <div className="home-button">
        <button onClick={() => setPageStatus(0)} class="homeButton">
          <img src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <h1>EduMemory</h1>
      <div className="cards">
        <img className="card-1" src={Card1} alt="card-1" />
        <img className="card-2" src={Card2} alt="card-2" />
        <img className="card-3" src={Card3} alt="card-3" />
        <img className="card-4" src={Card4} alt="card-4" /> <br />
        <img className="card-5" src={Card5} alt="card-5" />
        <img className="card-6" src={Card6} alt="card-6" />
        <img className="card-7" src={Card7} alt="card-7" />
        <img className="card-8" src={Card8} alt="card-8" /> <br />
        <img className="card-9" src={Card9} alt="card-9" />
        <img className="card-14" src={Card14} alt="card-14" />
        <img className="card-11" src={Card11} alt="card-11" />
        <img className="card-12" src={Card12} alt="card-12" />
      </div>
    </div>
  );
};

export default Game;
