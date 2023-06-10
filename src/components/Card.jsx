export default function Card({ path, selected }) {
  return (
    <div className="card">
      <div className={selected ? "selected" : undefined}>
        <img src={path} alt="" className="card-face" />
        <img src="/images/fireship.png" alt="" className="card-back" />
      </div>
    </div>
  );
}
