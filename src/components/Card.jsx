export default function Card({ path, selected, card, handleClick }) {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={path} alt="" className="card-face" />
        <img src="/images/placeholder.png" alt="" className="card-back" onClick={() => handleClick(card)} />
      </div>
    </div>
  );
}
