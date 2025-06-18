import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartPage } from "./CartPage";
import { useCartContext } from "@/context/CartContext";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

vi.mock("@/context/CartContext", () => ({
  useCartContext: vi.fn(),
}));

vi.mock("@/components/CartItem/CartItem", () => ({
  CartItem: ({ item }) => <div>{item.name}</div>,
}));

vi.mock("@/components/Button/Button", () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

describe("CartPage", () => {
  it("renders cart items and totals", () => {
    useCartContext.mockReturnValue({
      cart: [
        { id: 1, name: "Phone A", color: "black", storage: "128GB" },
        { id: 2, name: "Phone B", color: "white", storage: "256GB" },
      ],
      cartCount: 2,
      cartTotal: 1998,
    });

    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /cart \(2\)/i })).toBeVisible();
    expect(screen.getByText("Phone A")).toBeVisible();
    expect(screen.getByText("Phone B")).toBeVisible();
  });
});
