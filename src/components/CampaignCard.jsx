function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function CampaignCard({ campanha }) {
  const progresso = Math.min(100, Math.round((campanha.arrecadado / campanha.meta) * 100));

  return (
    <article className="campaign-card">
      <img src={campanha.imagem} alt={campanha.titulo} className="campaign-card-img" />

      <div className="campaign-card-corpo">
        <span className="tag">{campanha.categoria}</span>
        <h3>{campanha.titulo}</h3>
        <p>{campanha.descricao}</p>

        <div className="barra">
          <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
        </div>
        <div className="campaign-card-valores">
          <strong>{formatarMoeda(campanha.arrecadado)}</strong>
          <span>de {formatarMoeda(campanha.meta)}</span>
        </div>

        <a href="#ajudar" className="btn btn-ghost">Quero ajudar</a>
      </div>
    </article>
  );
}

export default CampaignCard;
