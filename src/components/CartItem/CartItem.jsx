import "./CartItem.css";
import { useCartContext } from "@/context/CartContext";

export const CartItem = ({ item }) => {
  const { dispatch } = useCartContext();

  const handleRemove = () => {
    if (item.quantity === 1) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          id: item.id,
          color: item.color,
          storage: item.storage,
        },
      });
    } else {
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: {
          id: item.id,
          color: item.color,
          storage: item.storage,
        },
      });
    }
  };

  return (
    <article className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item__image" />
      <div className="cart-item__info">
        <div className="cart-item__text">
          <h3 className="cart-item__title">{item.name}</h3>
          <p>
            {item.storage} | {item.color.toUpperCase()}
          </p>
          <p>{item.basePrice} EUR</p>
          <p> Quantity: {item.quantity}</p>
        </div>
        <button onClick={handleRemove} className="cart-item__remove">
          Eliminar
        </button>
      </div>
    </article>
  );
};
