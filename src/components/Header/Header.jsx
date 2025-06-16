import { Link } from "react-router-dom";
import logo from "@assets/logo_icon.svg";
import bag from "@assets/bag_icon.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav wrapper">
        <Link to="/" aria-label="Ir al inicio">
          <img src={logo} alt="Logo tienda móviles" className="logo" />
        </Link>

        <Link to="/carrito" className="cart-link" aria-label="Ir al carrito">
          <img src={bag} alt="carrito" className="" />
          <span className="cart-count">0</span>
        </Link>
      </nav>
    </header>
  );
};
