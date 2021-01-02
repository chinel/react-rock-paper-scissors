import React from "react";

export default function WinLoses({ wins, losses }) {
  return (
    <div className="info">
      <h2>Rock. Paper. Scissors</h2>

      {/* wins vs losses stats */}
      <div className="wins-losses">
        <div className="wins">
          <span className="number">{wins}</span>
          <span className="text">{wins === 1 ? "Win" : "Wins"}</span>
        </div>

        <div className="losses">
          <span className="number">{losses}</span>
          <span className="text">{losses === 1 ? "Loss" : "Losses"}</span>
        </div>
      </div>
    </div>
  );
}
