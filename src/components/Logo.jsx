import logo from "../assets/logo.png";
import { ong } from "../data/ong";

function Logo({ claro = false }) {
  return (
    <div className={claro ? "logo logo-claro" : "logo"}>
      <img src={logo} alt={`Instituto ${ong.nome}`} className="logo-img" />
      <span className="logo-text">
        <span className="logo-maos">Mãos</span> <span className="logo-solidarias">Solidárias</span>
      </span>
    </div>
  );
}

export default Logo;
