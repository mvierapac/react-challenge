import { useCartContext } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem/CartItem";
import { Button } from "@/components/Button/Button";
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

      {/* Desktop layout */}
      <section className="cart-summary cart-summary--desktop">
        <Button color="white" onClick={handleContinueShopping}>
          Continue Shopping
        </Button>

        {cartCount > 0 && (
          <div className="cart-summary__right">
            <span className="cart-summary__total">{`Total ${cartTotal}€`}</span>
            <Button color="black">PAY</Button>
          </div>
        )}
      </section>

      {/* Mobile layout */}
      <section className="cart-summary cart-summary--mobile">
        {cartCount > 0 && (
          <div className="cart-summary__total-row">
            <span>Total</span>
            <span>{`${cartTotal}€`}</span>
          </div>
        )}

        <div className="cart-summary__buttons-row">
          <Button
            color="white"
            onClick={handleContinueShopping}
            style={{ width: "50%" }}
          >
            Continue Shopping
          </Button>
          {cartCount > 0 && (
            <Button color="black" style={{ width: "50%" }}>
              PAY
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};
