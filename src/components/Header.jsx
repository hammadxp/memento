import { useState } from "react";

export default function Header({ wins, handleNewGame }) {
  return (
    <header className="header">
      <h4>{wins} Wins</h4>
      <h3>Memento (Memory Game)</h3>
      <button onClick={handleNewGame}>New game</button>
    </header>
  );
}
