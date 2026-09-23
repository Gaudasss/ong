import "./HelpCard.css";

function HelpCard({ icone, titulo, descricao }) {
  return (
    <div className="help-card">
      <div className="help-card-icone">{icone}</div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default HelpCard;
