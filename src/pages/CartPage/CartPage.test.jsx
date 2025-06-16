import { describe, it, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartPage } from "./CartPage";
import { useCartContext } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

vi.mock("@/context/CartContext", () => ({
  useCartContext: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("CartPage", () => {
  it("renders cart items and total", () => {
    useCartContext.mockReturnValue({
      cart: [
        {
          id: 1,
          name: "Phone 1",
          basePrice: 500,
          color: "black",
          storage: "128GB",
          quantity: 2,
          imageUrl: "phone.jpg",
        },
      ],
      cartCount: 2,
      cartTotal: 1000,
    });

    render(<CartPage />);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    expect(screen.getByText("Phone 1")).toBeInTheDocument();
    expect(screen.getByText("1000 EUR")).toBeInTheDocument();
  });

  it("calls navigate when clicking continue shopping", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    useCartContext.mockReturnValue({
      cart: [],
      cartCount: 0,
      cartTotal: 0,
    });

    render(<CartPage />);

    fireEvent.click(screen.getByRole("button", { name: /continue shopping/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
