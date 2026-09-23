import { Link } from "react-router-dom";
import "./CampaignCard.css";

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function CampaignCard({ campanha }) {
  const progresso = Math.min(100, Math.round((campanha.arrecadado / campanha.meta) * 100));

  return (
    <article className="campaign-card">
      <div className="campaign-card-imagem">
        <img src={campanha.imagem} alt={campanha.titulo} />
        <span className="campaign-card-categoria">{campanha.categoria}</span>
      </div>

      <div className="campaign-card-corpo">
        <h3>{campanha.titulo}</h3>
        <p>{campanha.descricao}</p>

        <div className="campaign-card-progresso">
          <div className="barra">
            <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
          </div>
          <div className="campaign-card-valores">
            <strong>{formatarMoeda(campanha.arrecadado)}</strong>
            <span>de {formatarMoeda(campanha.meta)}</span>
          </div>
        </div>

        <Link to="/como-ajudar" className="btn btn-ghost campaign-card-btn">
          Quero ajudar
        </Link>
      </div>
    </article>
  );
}

export default CampaignCard;
