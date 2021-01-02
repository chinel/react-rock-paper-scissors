import React, { useEffect, useState } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";
import WinLoses from "./components/WinLoses";
import Choices from "./components/Choices";
import GameState from "./components/GameState";

const choices = [
  { id: 1, name: "rock", component: Rock, losesTo: 2 },
  { id: 2, name: "paper", component: Paper, losesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); //win, loss, draw

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      //lose
      setGameState("lose");
      setLosses((loses) => losses + 1);
    } else if (computerChoice.losesTo === chosenChoice.id) {
      //win
      setGameState("win");
      setWins((wins) => wins + 1);
    } else if (computerChoice.id === chosenChoice.id) {
      //draw
      setGameState("draw");
    }
  }

  function renderComponent(choice) {
    const Component = choice?.component;
    return choice ? <Component /> : null;
  }

  console.log(typeof renderComponent);

  return (
    <div className="app">
      {/* information goes here */}

      <WinLoses wins={wins} losses={losses} />

      {/* the popup to show win/loss/draw */}
      {gameState && (
        <GameState
          gameState={gameState}
          restartGame={restartGame}
          renderComp={renderComponent}
          userChoice={userChoice}
          computerChoice={computerChoice}
        />
      )}
      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
}
