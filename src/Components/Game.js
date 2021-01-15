// import React from "react";
import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import HomeButton from "../img/home-button.svg";
import Background1 from "../img/cartoon-animals/card-1.png";
import Background13 from "../img/cartoon-animals/card-13.png";
import Background3 from "../img/cartoon-animals/card-3.png";
import Background4 from "../img/cartoon-animals/card-4.png";
import Background5 from "../img/cartoon-animals/card-5.png";
import Background6 from "../img/cartoon-animals/card-6.png";
import Background7 from "../img/cartoon-animals/card-7.png";
import Background8 from "../img/cartoon-animals/card-8.png";
import Background9 from "../img/cartoon-animals/card-9.png";
import Background14 from "../img/cartoon-animals/card-14.png";
import Background11 from "../img/cartoon-animals/card-11.png";
import Background12 from "../img/cartoon-animals/card-12.png";

export default function Game({ setPageStatus, pageStatus }) {
  const [options, setOptions] = useState(null);
  const [highScore, setHighScore] = useState(0);

  //This will check to see if new score is high score
  useEffect(() => {
    const json = localStorage.getItem("memorygamehighscore");
    const savedScore = JSON.parse(json);
    if (savedScore) {
      setHighScore(savedScore);
    }
  }, []);

  return (
    <div className={`game ${pageStatus ? "active-game" : ""}`}>
      <div className="home-button1">
        <button onClick={() => setPageStatus(0)} class="homeButton">
          <img className="homePic" src={HomeButton} alt="Home Button" />
        </button>
      </div>
      <h1>EduMemory</h1>

      <h2>Memory Game</h2>

      <div className="container">
        <div>
          <h4>High Score: {highScore}</h4>
        </div>
        <div>
          {options === null ? (
            <>
              <button className="home-button" onClick={() => setOptions(12)}>
                Easy
              </button>
              <button className="home-button" onClick={() => setOptions(18)}>
                Medium
              </button>
              <button className="home-button" onClick={() => setOptions(24)}>
                Hard
              </button>
            </>
          ) : (
            <>
              <button
                className="home-button"
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Start Over
              </button>
              <button className="home-button" onClick={() => setOptions(null)}>
                Main Menu
              </button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ) : (
        <h2>Choose a difficulty to begin!</h2>
      )}
    </div>
  );
}

//Game Board. Put in another file
function MemoryGame({ options, setOptions, highScore, setHighScore }) {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const colors = [
    `url(${Background1})`,
    `url(${Background13})`,
    `url(${Background3})`,
    `url(${Background4})`,
    `url(${Background5})`,
    `url(${Background6})`,
    `url(${Background7})`,
    `url(${Background8})`,
    `url(${Background9})`,
    `url(${Background14})`,
    `url(${Background11})`,
    `url(${Background12})`,
  ];

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        colorId: i,
        color: colors[i],
        flipped: false,
      };
      const secondOption = {
        id: 2 * i + 1,
        colorId: i,
        color: colors[i],
        flipped: false,
      };

      newGame.push(firstOption);
      newGame.push(secondOption);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  }, []);

  //Section that shows high score. Maybe change later as is a little confusing
  useEffect(() => {
    const finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        const bestPossible = game.length;
        let multiplier;

        if (options === 12) {
          multiplier = 5;
        } else if (options === 18) {
          multiplier = 2.5;
        } else if (options === 24) {
          multiplier = 1;
        }

        const pointsLost = multiplier * (0.66 * flippedCount - bestPossible);

        let score;
        if (pointsLost < 100) {
          score = 100 - pointsLost;
        } else {
          score = 0;
        }

        if (score > highScore) {
          setHighScore(score);
          const json = JSON.stringify(score);
          localStorage.setItem("memorygamehighscore", json);
        }
        //was getting error "Unexpected use of 'confirm' no-restricted-globals". Just needed to add "window."below
        const newGame = window.confirm(
          "You Win!, SCORE: " + score + " New Game?"
        );
        if (newGame) {
          const gameLength = game.length;
          setOptions(null);
          setTimeout(() => {
            setOptions(gameLength);
          }, 5);
        } else {
          setOptions(null);
        }
      }, 500);
    }
  }, [game]);

  // Runs if two cards have been flipped
  if (flippedIndexes.length === 2) {
    const match =
      game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div>loading...</div>;
  else {
    return (
      <div id="cards">
        {game.map((card, index) => (
          <div className="card" key={index}>
            <Card
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    );
  }
}

//Card setup. should be in a separate file eventually
function Card({
  id,
  color,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  //Set timer, then flip the cards back
  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        set((state) => !state);
        setFlippedCount(flippedCount + 1);
        setFlippedIndexes([]);
      }, 1000);
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  const onCardClick = () => {
    if (!game[id].flipped && flippedCount % 3 === 0) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };

  return (
    <div onClick={onCardClick}>
      <a.div
        className="c back"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          backgroundImage: color,
        }}
      />
    </div>
  );
}

//export default Game;
