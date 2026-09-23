import { useState } from "react";
import voluntariadoImg from "../assets/illustrations/voluntariado.svg";
import "./ComoAjudar.css";

const pontosColeta = [
  { local: "Mercado Bom Preço", bairro: "Jatiúca", itens: "Alimentos e itens de higiene" },
  { local: "Escola Municipal Recanto Feliz", bairro: "Cidade Universitária", itens: "Material escolar" },
  { local: "Farmácia Vida", bairro: "Ponta Verde", itens: "Itens de higiene pessoal" },
  { local: "Sede da ONG Mãos Solidárias", bairro: "Jatiúca", itens: "Todos os tipos de doação" },
];

const areasInteresse = [
  "Arrecadação e triagem de doações",
  "Ações sociais e mutirões",
  "Comunicação e redes sociais",
  "Apoio administrativo",
];

const estadoInicialForm = {
  nome: "",
  email: "",
  telefone: "",
  area: areasInteresse[0],
  disponibilidade: "Fins de semana",
  mensagem: "",
};

function ComoAjudar() {
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
      <section className="section como-topo">
        <div className="container">
          <span className="eyebrow">Como ajudar</span>
          <h1 className="section-title">Escolha a forma de contribuir que combina com você</h1>
          <p className="section-lead">
            Toda ajuda é bem-vinda: uma doação em dinheiro, um item deixado em um ponto de
            coleta ou algumas horas do seu tempo como voluntário fazem toda a diferença.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container doacao-financeira">
          <div className="doacao-texto">
            <h2>Doação via PIX</h2>
            <p>
              Contribua com qualquer valor diretamente para as campanhas ativas. 100% do
              valor arrecadado é revertido para a compra de itens e apoio às famílias
              atendidas.
            </p>
            <div className="pix-chave">
              <span>Chave PIX (CNPJ)</span>
              <strong>12.345.678/0001-90</strong>
            </div>
            <p className="doacao-obs">
              Após a doação, se desejar receber um recibo, envie o comprovante para
              contato@maossolidarias.org.
            </p>
          </div>
          <div className="pix-card">
            <div className="pix-card-qr" aria-hidden="true">
              <span>QR Code</span>
              <span>PIX</span>
            </div>
            <p>Aponte a câmera do app do seu banco para doar em segundos.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Doação de itens</h2>
          <p className="section-lead">
            Alimentos não perecíveis, roupas em bom estado, material escolar e itens de
            higiene podem ser entregues em qualquer um dos pontos de coleta abaixo.
          </p>

          <div className="pontos-tabela">
            {pontosColeta.map((ponto) => (
              <div className="ponto-linha" key={ponto.local}>
                <div>
                  <strong>{ponto.local}</strong>
                  <span>{ponto.bairro}</span>
                </div>
                <span className="ponto-itens">{ponto.itens}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container voluntariado-inner">
          <div className="voluntariado-imagem">
            <img src={voluntariadoImg} alt="Ilustração de uma mão levantada, representando voluntariado" />
          </div>

          <div className="voluntariado-form-wrap">
            <span className="eyebrow">Seja voluntário</span>
            <h2 className="section-title">Cadastre-se para ajudar nas próximas ações</h2>
            <p className="section-lead">
              Preencha o formulário abaixo e nossa equipe entrará em contato com as
              próximas oportunidades de voluntariado.
            </p>

            {enviado && (
              <p className="form-sucesso" role="status">
                Cadastro recebido! Em breve entraremos em contato por e-mail.
              </p>
            )}

            <form className="voluntariado-form" onSubmit={enviarFormulario}>
              <div className="campo">
                <label htmlFor="nome">Nome completo</label>
                <input id="nome" name="nome" type="text" required value={form.nome} onChange={atualizarCampo} />
              </div>

              <div className="campo-linha">
                <div className="campo">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={atualizarCampo} />
                </div>
                <div className="campo">
                  <label htmlFor="telefone">Telefone</label>
                  <input id="telefone" name="telefone" type="tel" required value={form.telefone} onChange={atualizarCampo} />
                </div>
              </div>

              <div className="campo-linha">
                <div className="campo">
                  <label htmlFor="area">Área de interesse</label>
                  <select id="area" name="area" value={form.area} onChange={atualizarCampo}>
                    {areasInteresse.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div className="campo">
                  <label htmlFor="disponibilidade">Disponibilidade</label>
                  <select id="disponibilidade" name="disponibilidade" value={form.disponibilidade} onChange={atualizarCampo}>
                    <option>Fins de semana</option>
                    <option>Durante a semana</option>
                    <option>Horário flexível</option>
                  </select>
                </div>
              </div>

              <div className="campo">
                <label htmlFor="mensagem">Mensagem (opcional)</label>
                <textarea id="mensagem" name="mensagem" rows="3" value={form.mensagem} onChange={atualizarCampo} />
              </div>

              <button type="submit" className="btn btn-primary">Quero ser voluntário</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComoAjudar;
