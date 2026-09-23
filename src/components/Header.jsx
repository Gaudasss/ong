import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#campanhas", label: "Campanhas" },
  { href: "#ajudar", label: "Como Ajudar" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={() => setMenuAberto(false)}>
          <span className="logo-mark">M</span>
          <span>
            Mãos <strong>Solidárias</strong>
          </span>
        </a>

        <nav className={menuAberto ? "nav nav-aberto" : "nav"}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuAberto(false)}>
              {link.label}
            </a>
          ))}
          <a href="#ajudar" className="btn btn-primary" onClick={() => setMenuAberto(false)}>
            Doar agora
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto((valor) => !valor)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
