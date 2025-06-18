import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import logo from "@assets/logo_icon.svg";
import bag from "@assets/bag_icon.svg";
import bagActive from "@assets/bag_active.svg";
import "./Header.css";

export const Header = () => {
  const { cartCount } = useCartContext();
  const bagIcon = cartCount > 0 ? bagActive : bag;

  return (
    <header className="header app-container">
      <nav className="nav wrapper">
        <Link to="/" aria-label="Ir al inicio">
          <img src={logo} alt="Logo tienda móviles" className="logo" />
        </Link>

        <Link to="/carrito" className="cart-link" aria-label="Ir al carrito">
          <img src={bagIcon} alt="carrito" className="" />
          <span
            className="cart-count"
            role="status"
            aria-label={`Carrito con ${cartCount} producto${
              cartCount === 1 ? "" : "s"
            }`}
          />{" "}
        </Link>
      </nav>
    </header>
  );
};
