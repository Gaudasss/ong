import sobreImg from "../assets/illustrations/sobre.svg";
import "./Sobre.css";

const valores = [
  {
    titulo: "Transparência",
    descricao: "Prestamos contas de todas as doações recebidas e das ações realizadas com a comunidade.",
  },
  {
    titulo: "Respeito",
    descricao: "Tratamos cada família atendida com dignidade, sem julgamentos ou condições.",
  },
  {
    titulo: "Colaboração",
    descricao: "Acreditamos que mudanças reais acontecem quando a comunidade se une por uma causa.",
  },
];

const historico = [
  { ano: "2019", texto: "Fundação da ONG por um grupo de voluntários do bairro Jatiúca, em Maceió." },
  { ano: "2021", texto: "Primeira campanha de arrecadação em larga escala, atendendo 100 famílias." },
  { ano: "2023", texto: "Abertura de pontos fixos de coleta em parceria com escolas e comércios locais." },
  { ano: "2025", texto: "Lançamento do site oficial para centralizar campanhas e cadastro de voluntários." },
];

function Sobre() {
  return (
    <>
      <section className="section sobre-topo">
        <div className="container sobre-topo-inner">
          <div className="sobre-texto">
            <span className="eyebrow">Quem somos</span>
            <h1 className="section-title">Uma rede de solidariedade construída por pessoas comuns</h1>
            <p>
              A ONG <strong>Mãos Solidárias</strong> nasceu em Maceió/AL a partir da vontade de um
              pequeno grupo de vizinhos em ajudar famílias em situação de vulnerabilidade. Hoje,
              somos uma rede de voluntários, doadores e parceiros que trabalham juntos para
              garantir alimentação, vestuário, itens de higiene e apoio educacional a quem mais
              precisa.
            </p>
            <p>
              Nossa missão é reduzir os impactos da desigualdade social na nossa comunidade,
              conectando quem pode doar com quem precisa receber, de forma organizada e
              transparente.
            </p>
          </div>
          <div className="sobre-imagem">
            <img src={sobreImg} alt="Ilustração de pessoas unidas em torno de um coração" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Nossos valores</span>
          <h2 className="section-title">O que guia o nosso trabalho</h2>

          <div className="valores-grid">
            {valores.map((valor) => (
              <div className="valor-card" key={valor.titulo}>
                <h3>{valor.titulo}</h3>
                <p>{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Nossa história</span>
          <h2 className="section-title">Uma trajetória de impacto crescente</h2>

          <ol className="timeline">
            {historico.map((item) => (
              <li key={item.ano}>
                <span className="timeline-ano">{item.ano}</span>
                <p>{item.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Sobre;
