import React from "react";

export default function GameState({
  gameState,
  restartGame,
  renderComp,
  userChoice,
  computerChoice,
}) {
  console.log(typeof renderComp);
  return (
    <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
      <div>
        <div className="game-state-content">
          <p>{userChoice && renderComp(userChoice)}</p>
          {gameState === "win" && <p>Congrats! You won!</p>}
          {gameState === "lose" && <p>Sorry! You lost!</p>}
          {gameState === "draw" && <p>You drew</p>}
          <p>{renderComp(computerChoice)}</p>
        </div>
        <button onClick={() => restartGame()}>Play Again</button>
      </div>
    </div>
  );
}
