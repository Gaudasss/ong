import { Link } from "react-router-dom";
import heroImg from "../assets/illustrations/hero.svg";
import campanhas from "../data/campanhas";
import CampaignCard from "../components/CampaignCard";
import StatCard from "../components/StatCard";
import HelpCard from "../components/HelpCard";
import "./Home.css";

const estatisticas = [
  { numero: "480+", rotulo: "famílias atendidas" },
  { numero: "120", rotulo: "voluntários ativos" },
  { numero: "36", rotulo: "campanhas realizadas" },
  { numero: "5", rotulo: "anos de atuação" },
];

function Home() {
  const destaques = campanhas.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-texto">
            <span className="eyebrow eyebrow-claro">ONG Mãos Solidárias · Maceió/AL</span>
            <h1>Transformando solidariedade em ação todos os dias.</h1>
            <p>
              Conectamos pessoas que querem ajudar com famílias que precisam de apoio.
              Doe alimentos, roupas ou seu tempo como voluntário — cada gesto conta.
            </p>
            <div className="hero-acoes">
              <Link to="/como-ajudar" className="btn btn-primary">Quero ajudar agora</Link>
              <Link to="/campanhas" className="btn btn-outline">Ver campanhas ativas</Link>
            </div>
          </div>
          <div className="hero-imagem">
            <img src={heroImg} alt="Ilustração de mãos entregando um coração, representando solidariedade" />
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container stats-grid">
          {estatisticas.map((item) => (
            <StatCard key={item.rotulo} numero={item.numero} rotulo={item.rotulo} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Campanhas em destaque</span>
          <h2 className="section-title">Ajude quem mais precisa agora</h2>
          <p className="section-lead">
            Estas são as campanhas com arrecadação em andamento. Escolha uma causa e
            contribua com o que estiver ao seu alcance.
          </p>

          <div className="campanhas-grid">
            {destaques.map((campanha) => (
              <CampaignCard key={campanha.id} campanha={campanha} />
            ))}
          </div>

          <div className="ver-todas">
            <Link to="/campanhas" className="btn btn-ghost">Ver todas as campanhas</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Como você pode ajudar</span>
          <h2 className="section-title">Três formas simples de contribuir</h2>
          <p className="section-lead">
            Não é preciso muito para fazer diferença. Escolha a forma mais fácil para você.
          </p>

          <div className="help-grid">
            <HelpCard
              icone="💰"
              titulo="Doação em dinheiro"
              descricao="Contribua via PIX com qualquer valor. 100% do valor arrecadado vai direto para as campanhas ativas."
            />
            <HelpCard
              icone="📦"
              titulo="Doação de itens"
              descricao="Leve alimentos, roupas ou produtos de higiene até um dos nossos pontos de coleta espalhados pela cidade."
            />
            <HelpCard
              icone="🤝"
              titulo="Seja voluntário"
              descricao="Participe das ações sociais, mutirões e eventos de arrecadação organizados pela ONG."
            />
          </div>

          <div className="ver-todas">
            <Link to="/como-ajudar" className="btn btn-primary">Ver detalhes de como ajudar</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
