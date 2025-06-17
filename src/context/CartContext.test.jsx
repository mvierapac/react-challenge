import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCartContext } from "./CartContext";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should add a new item to the cart", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      basePrice: 300,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(1);
  });

  it("should increase quantity if same item is added", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      basePrice: 300,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(2);
  });

  it("should decrease quantity or remove item", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      basePrice: 300,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "DECREASE_QUANTITY", payload: item });
    });

    expect(result.current.cart[0].quantity).toBe(1);

    act(() => {
      result.current.dispatch({ type: "DECREASE_QUANTITY", payload: item });
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it("should remove item from cart", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      basePrice: 300,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "REMOVE_FROM_CART", payload: item });
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it("should clear cart", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      basePrice: 300,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "CLEAR_CART" });
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it("should calculate cart count and total", () => {
    const { result } = renderHook(() => useCartContext(), { wrapper });

    const item = {
      id: "1",
      name: "Phone 1",
      price: 100,
      color: "black",
      storage: "128GB",
      imageUrl: "example.jpg",
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
      result.current.dispatch({ type: "ADD_TO_CART", payload: item });
    });

    expect(result.current.cartCount).toBe(2);
    expect(result.current.cartTotal).toBe(200);
  });
});
