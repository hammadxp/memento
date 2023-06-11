export default function Card({ path, selected, handleClick }) {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={path} alt="" className="card-face" />
        <img src="/images/fireship.png" alt="" className="card-back" onClick={handleClick} />
      </div>
    </div>
  );
}
