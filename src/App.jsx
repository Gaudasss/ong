import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampaignCard from "./components/CampaignCard";
import campanhas from "./data/campanhas";

const HERO_IMG = "https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=1600";
const SOBRE_IMG = "https://images.pexels.com/photos/6646873/pexels-photo-6646873.jpeg?auto=compress&cs=tinysrgb&w=800";
const AJUDAR_IMG = "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800";

const estatisticas = [
  { numero: "480+", rotulo: "famílias atendidas" },
  { numero: "120", rotulo: "voluntários ativos" },
  { numero: "36", rotulo: "campanhas realizadas" },
  { numero: "5", rotulo: "anos de atuação" },
];

const estadoInicialForm = { nome: "", email: "", telefone: "", mensagem: "" };

function App() {
  const [form, setForm] = useState(estadoInicialForm);
  const [enviado, setEnviado] = useState(false);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setForm((atual) => ({ ...atual, [name]: value }));
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    setEnviado(true);
    setForm(estadoInicialForm);
  }

  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay">
            <div className="container">
              <span className="tag tag-claro">ONG Mãos Solidárias · Maceió/AL</span>
              <h1>Transformando solidariedade em ação todos os dias.</h1>
              <p>
                Conectamos pessoas que querem ajudar com famílias que precisam de apoio.
                Doe alimentos, roupas ou seu tempo como voluntário — cada gesto conta.
              </p>
              <div className="hero-acoes">
                <a href="#ajudar" className="btn btn-primary">Quero ajudar agora</a>
                <a href="#campanhas" className="btn btn-outline">Ver campanhas</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section stats">
          <div className="container stats-linha">
            {estatisticas.map((item) => (
              <div className="stat" key={item.rotulo}>
                <strong>{item.numero}</strong>
                <span>{item.rotulo}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="section section-alt">
          <div className="container sobre-linha">
            <img src={SOBRE_IMG} alt="Voluntários organizando doações" className="sobre-img" />
            <div>
              <span className="tag">Quem somos</span>
              <h2>Uma rede de solidariedade construída por pessoas comuns</h2>
              <p>
                A ONG <strong>Mãos Solidárias</strong> nasceu em Maceió/AL a partir da vontade de
                um pequeno grupo de vizinhos em ajudar famílias em situação de vulnerabilidade.
                Hoje somos uma rede de voluntários, doadores e parceiros que garante alimentação,
                vestuário, itens de higiene e apoio educacional a quem mais precisa.
              </p>
              <p>
                Trabalhamos de forma transparente: toda doação recebida é usada diretamente nas
                campanhas ativas, com prestação de contas aberta à comunidade.
              </p>
            </div>
          </div>
        </section>

        <section id="campanhas" className="section">
          <div className="container">
            <span className="tag">Campanhas</span>
            <h2>Ajude quem mais precisa agora</h2>
            <p className="lead">Escolha uma causa e contribua com o que estiver ao seu alcance.</p>

            <div className="campanhas-linha">
              {campanhas.map((campanha) => (
                <CampaignCard key={campanha.id} campanha={campanha} />
              ))}
            </div>
          </div>
        </section>

        <section id="ajudar" className="section section-alt">
          <div className="container ajudar-linha">
            <img src={AJUDAR_IMG} alt="Voluntários entregando doações" className="ajudar-img" />

            <div className="ajudar-conteudo">
              <span className="tag">Como ajudar</span>
              <h2>Escolha a forma de contribuir</h2>

              <div className="pix-card">
                <strong>Doação via PIX</strong>
                <p>Chave (CNPJ): <strong>12.345.678/0001-90</strong></p>
              </div>

              <p>
                Também recebemos itens (alimentos, roupas, material escolar e higiene) na nossa
                sede, na Rua das Acácias, 120 — Jatiúca, Maceió/AL.
              </p>

              <h3>Ou cadastre-se como voluntário</h3>

              {enviado && (
                <p className="form-sucesso" role="status">
                  Cadastro recebido! Em breve entraremos em contato.
                </p>
              )}

              <form className="form" onSubmit={enviarFormulario}>
                <input
                  name="nome"
                  type="text"
                  placeholder="Nome completo"
                  required
                  value={form.nome}
                  onChange={atualizarCampo}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required
                  value={form.email}
                  onChange={atualizarCampo}
                />
                <input
                  name="telefone"
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={form.telefone}
                  onChange={atualizarCampo}
                />
                <textarea
                  name="mensagem"
                  rows="3"
                  placeholder="Como você gostaria de ajudar?"
                  value={form.mensagem}
                  onChange={atualizarCampo}
                />
                <button type="submit" className="btn btn-primary">Quero ser voluntário</button>
              </form>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <span className="tag">Contato</span>
            <h2>Fale com a gente</h2>
            <div className="contato-linha">
              <p>📍 Rua das Acácias, 120 — Jatiúca, Maceió/AL</p>
              <p>📞 (82) 90000-0000</p>
              <p>✉️ contato@maossolidarias.org</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
