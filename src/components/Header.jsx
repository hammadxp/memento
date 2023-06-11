export default function Header({ wins, heading, handleNewGame }) {
  return (
    <header className="header">
      <h4>{wins} Wins</h4>
      <h3>{heading}</h3>
      <button onClick={handleNewGame}>New game</button>
    </header>
  );
}
