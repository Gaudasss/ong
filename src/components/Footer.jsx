function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo logo-footer">
            <span className="logo-mark">M</span>
            <span>
              Mãos <strong>Solidárias</strong>
            </span>
          </div>
          <p>Arrecadação de doações e mobilização de voluntários em Maceió/AL.</p>
        </div>

        <div>
          <h4>Links</h4>
          <a href="#sobre">Sobre</a>
          <a href="#campanhas">Campanhas</a>
          <a href="#ajudar">Como ajudar</a>
          <a href="#contato">Contato</a>
        </div>

        <div>
          <h4>Contato</h4>
          <p>Rua das Acácias, 120 — Jatiúca, Maceió/AL</p>
          <p>(82) 90000-0000</p>
          <p>contato@maossolidarias.org</p>
        </div>
      </div>

      <p className="footer-copy">© {ano} ONG Mãos Solidárias. Projeto acadêmico — Programação Web I, UFAL.</p>
    </footer>
  );
}

export default Footer;
