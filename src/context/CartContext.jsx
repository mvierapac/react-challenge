import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = action.payload;

      const existingIndex = state.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.storage === newItem.storage
      );

      if (existingIndex !== -1) {
        const updated = [...state];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...state, { ...newItem, quantity: 1 }];
      }
    }

    case "REMOVE_FROM_CART": {
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.storage === action.payload.storage
          )
      );
    }

    case "DECREASE_QUANTITY": {
      return state
        .map((item) => {
          if (
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.storage === action.payload.storage
          ) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.basePrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, cartCount, cartTotal, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
