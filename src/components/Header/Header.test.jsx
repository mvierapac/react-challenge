import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

vi.mock("@assets/logo_icon.svg", () => ({ default: "logo_icon.svg" }));
vi.mock("@assets/bag_icon.svg", () => ({ default: "bag_icon.svg" }));
vi.mock("@assets/bag_active.svg", () => ({ default: "bag_active.svg" }));

const mockUseCartContext = vi.fn();

vi.mock("@/context/CartContext", () => ({
  useCartContext: () => mockUseCartContext(),
}));

describe("Header", () => {
  it("should render default bag icon when cart is empty", () => {
    mockUseCartContext.mockReturnValue({ cartCount: 0 });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/logo tienda móviles/i)).toBeInTheDocument();
    expect(screen.getByAltText(/carrito/i)).toHaveAttribute(
      "src",
      "bag_icon.svg"
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should render active bag icon when cart has items", () => {
    mockUseCartContext.mockReturnValue({ cartCount: 2 });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/carrito/i)).toHaveAttribute(
      "src",
      "bag_active.svg"
    );
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
