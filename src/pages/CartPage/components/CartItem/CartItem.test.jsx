import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CartItem } from "./CartItem";

let mockDispatch;

vi.mock("@/context/CartContext", () => ({
  useCartContext: () => ({
    dispatch: mockDispatch,
  }),
}));

const baseItem = {
  id: "123",
  name: "iPhone 15",
  color: "black",
  storage: "128GB",
  imageUrl: "https://example.com/image.jpg",
  price: 999,
  quantity: 1,
};

describe("CartItem", () => {
  beforeEach(() => {
    mockDispatch = vi.fn();
  });

  it("should render product info", () => {
    render(<CartItem item={baseItem} />);

    expect(screen.getByRole("heading", { name: /iphone 15/i })).toBeVisible();
    expect(screen.getByText(/128GB \| BLACK/i)).toBeVisible();
    expect(screen.getByText(/999 EUR/i)).toBeVisible();
    expect(screen.getByText(/Quantity: 1/i)).toBeVisible();
    expect(screen.getByRole("button", { name: /eliminar/i })).toBeVisible();
  });

  it("should dispatch REMOVE_FROM_CART when quantity is 1", () => {
    render(<CartItem item={baseItem} />);
    fireEvent.click(screen.getByRole("button", { name: /eliminar/i }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_FROM_CART",
      payload: {
        id: "123",
        color: "black",
        storage: "128GB",
      },
    });
  });

  it("should dispatch DECREASE_QUANTITY when quantity is more than 1", () => {
    const item = { ...baseItem, quantity: 2 };
    render(<CartItem item={item} />);
    fireEvent.click(screen.getByRole("button", { name: /eliminar/i }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DECREASE_QUANTITY",
      payload: {
        id: "123",
        color: "black",
        storage: "128GB",
      },
    });
  });
});
