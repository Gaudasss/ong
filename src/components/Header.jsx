import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/campanhas", label: "Campanhas" },
  { to: "/como-ajudar", label: "Como Ajudar" },
  { to: "/contato", label: "Contato" },
];

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo" onClick={() => setMenuAberto(false)}>
          <span className="logo-mark">M</span>
          <span className="logo-text">
            Mãos <strong>Solidárias</strong>
          </span>
        </NavLink>

        <nav className={`nav ${menuAberto ? "nav-aberto" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "nav-link ativo" : "nav-link")}
                  onClick={() => setMenuAberto(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/como-ajudar" className="btn btn-primary nav-cta" onClick={() => setMenuAberto(false)}>
            Doar agora
          </NavLink>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((valor) => !valor)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
