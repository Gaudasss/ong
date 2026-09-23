import Logo from "./Logo";
import { ong, navLinks } from "../data/ong";

const linksRodape = navLinks.filter((link) => link.href !== "#inicio");

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Logo claro />
          <p>{ong.descricaoCurta}</p>
        </div>

        <div>
          <h4>Links</h4>
          {linksRodape.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div>
          <h4>Contato</h4>
          <p>{ong.endereco}</p>
          <p>{ong.telefone}</p>
          <p>{ong.email}</p>
        </div>
      </div>

      <p className="footer-copy">© {ano} ONG {ong.nome}. Projeto acadêmico — Programação Web I, UFAL.</p>
    </footer>
  );
}

export default Footer;
