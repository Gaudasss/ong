import "./StatCard.css";

function StatCard({ numero, rotulo }) {
  return (
    <div className="stat-card">
      <strong>{numero}</strong>
      <span>{rotulo}</span>
    </div>
  );
}

export default StatCard;
