import { useState } from "react";
import campanhas from "../data/campanhas";
import CampaignCard from "../components/CampaignCard";
import "./Campanhas.css";

function Campanhas() {
  const categorias = ["Todas", ...new Set(campanhas.map((c) => c.categoria))];
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  const campanhasFiltradas =
    categoriaAtiva === "Todas"
      ? campanhas
      : campanhas.filter((c) => c.categoria === categoriaAtiva);

  return (
    <section className="section campanhas-page">
      <div className="container">
        <span className="eyebrow">Campanhas</span>
        <h1 className="section-title">Campanhas ativas de arrecadação</h1>
        <p className="section-lead">
          Conheça as campanhas em andamento e escolha a causa com a qual você mais se
          identifica. Toda contribuição é bem-vinda.
        </p>

        <div className="filtros">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={categoria === categoriaAtiva ? "filtro-btn ativo" : "filtro-btn"}
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="campanhas-grid">
          {campanhasFiltradas.map((campanha) => (
            <CampaignCard key={campanha.id} campanha={campanha} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Campanhas;
