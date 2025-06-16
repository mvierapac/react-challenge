import { useCartContext } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

export const CartPage = () => {
  const { cart, cartCount, cartTotal } = useCartContext();

  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="cart-page wrapper">
      <h2 className="cart-title">Cart ({cartCount})</h2>

      <div className="cart-content">
        <section className="cart-grid">
          {cart.map((item, index) => (
            <CartItem
              key={`${item.id}-${item.color}-${item.storage}-${index}`}
              item={item}
            />
          ))}
        </section>
      </div>

      <section className="cart-summary">
        <button
          type="button"
          className="cart-summary__continue"
          onClick={handleContinueShopping}
          aria-label="Return to home page to continue shopping"
        >
          Continue Shopping
        </button>

        <div className="cart-summary__total">
          <p>Total</p>
          <p>{cartTotal} EUR</p>
          <button className="cart-summary__pay">PAY</button>
        </div>
      </section>
    </div>
  );
};
