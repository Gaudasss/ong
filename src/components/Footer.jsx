import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-sobre">
          <div className="logo">
            <span className="logo-mark">M</span>
            <span className="logo-text">
              Mãos <strong>Solidárias</strong>
            </span>
          </div>
          <p>
            Associação sem fins lucrativos que arrecada doações e mobiliza voluntários
            para apoiar famílias em situação de vulnerabilidade em Maceió/AL.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://wa.me/5582900000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
            <a href="mailto:contato@maossolidarias.org" aria-label="E-mail">E-mail</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Links rápidos</h4>
          <ul>
            <li><Link to="/sobre">Sobre a ONG</Link></li>
            <li><Link to="/campanhas">Campanhas ativas</Link></li>
            <li><Link to="/como-ajudar">Como ajudar</Link></li>
            <li><Link to="/contato">Fale conosco</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>Rua das Acácias, 120 — Jatiúca, Maceió/AL</li>
            <li>(82) 90000-0000</li>
            <li>contato@maossolidarias.org</li>
            <li>Seg. a Sex., 9h às 17h</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {ano} ONG Mãos Solidárias. Projeto acadêmico — Programação Web I, UFAL.</p>
      </div>
    </footer>
  );
}

export default Footer;
