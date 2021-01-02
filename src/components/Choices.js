import React from "react";
import Paper from "../icons/Paper";
import Rock from "../icons/Rock";
import Scissors from "../icons/Scissors";
export default function Choices({ handleUserChoice }) {
  return (
    <div className="choices">
      {/* choices captions */}
      <div>You</div>
      <div />
      <div>Computer</div>

      {/* buttons for my choice */}
      <div>
        <button className="rock" onClick={() => handleUserChoice(1)}>
          <Rock />
        </button>
        <button className="paper" onClick={() => handleUserChoice(2)}>
          <Paper />
        </button>
        <button className="scissors" onClick={() => handleUserChoice(3)}>
          <Scissors />
        </button>
      </div>

      <div className="vs">vs</div>

      {/* show the computer's choice */}
      <div>
        <button className="computer-choice">?</button>
      </div>
    </div>
  );
}
