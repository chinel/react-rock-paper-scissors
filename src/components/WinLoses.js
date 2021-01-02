import React from "react";

export default function WinLoses({
  gameState,
  restartGame,
  renderComponent,
  userChoice,
  computerChoice,
}) {
  return (
    <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
      <div>
        <div className="game-state-content">
          <p>{renderComponent(userChoice)}</p>
          {gameState === "win" && <p>Congrats! You won!</p>}
          {gameState === "lose" && <p>Sorry! You lost!</p>}
          {gameState === "draw" && <p>You drew</p>}
          <p>{renderComponent(computerChoice)}</p>
        </div>
        <button onClick={() => restartGame()}>Play Again</button>
      </div>
    </div>
  );
}
