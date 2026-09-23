import { useState } from "react";
import "./Contato.css";

const estadoInicial = { nome: "", email: "", assunto: "", mensagem: "" };

function Contato() {
  const [form, setForm] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setForm((atual) => ({ ...atual, [name]: value }));
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    setEnviado(true);
    setForm(estadoInicial);
  }

  return (
    <section className="section contato-page">
      <div className="container">
        <span className="eyebrow">Contato</span>
        <h1 className="section-title">Fale com a nossa equipe</h1>
        <p className="section-lead">
          Tem dúvidas sobre doações, parcerias ou quer levar uma ação da ONG até a sua
          empresa ou escola? Envie uma mensagem.
        </p>

        <div className="contato-grid">
          <div className="contato-info">
            <div className="info-item">
              <h3>Endereço</h3>
              <p>Rua das Acácias, 120 — Jatiúca, Maceió/AL</p>
            </div>
            <div className="info-item">
              <h3>Telefone</h3>
              <p>(82) 90000-0000</p>
            </div>
            <div className="info-item">
              <h3>E-mail</h3>
              <p>contato@maossolidarias.org</p>
            </div>
            <div className="info-item">
              <h3>Horário de atendimento</h3>
              <p>Segunda a sexta, das 9h às 17h</p>
            </div>
            <div className="mapa-placeholder" role="img" aria-label="Mapa ilustrativo da localização da ONG">
              <span>📍 Jatiúca, Maceió/AL</span>
            </div>
          </div>

          <form className="contato-form" onSubmit={enviarFormulario}>
            {enviado && (
              <p className="form-sucesso" role="status">
                Mensagem enviada! Retornaremos o contato em breve.
              </p>
            )}

            <div className="campo">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" required value={form.nome} onChange={atualizarCampo} />
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={atualizarCampo} />
            </div>
            <div className="campo">
              <label htmlFor="assunto">Assunto</label>
              <input id="assunto" name="assunto" type="text" required value={form.assunto} onChange={atualizarCampo} />
            </div>
            <div className="campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="5" required value={form.mensagem} onChange={atualizarCampo} />
            </div>
            <button type="submit" className="btn btn-primary">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
