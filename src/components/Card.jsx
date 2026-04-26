export default function Card({ name, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}
