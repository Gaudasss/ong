import { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "../data/ong";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" onClick={fecharMenu}>
          <Logo />
        </a>

        <nav className={menuAberto ? "nav nav-aberto" : "nav"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={fecharMenu}>
              {link.label}
            </a>
          ))}
          <a href="#ajudar" className="btn btn-primary" onClick={fecharMenu}>
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
