import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock de componentes de páginas
vi.mock("@/pages/Home/Home", () => ({
  Home: () => <div>Mock Home</div>,
}));
vi.mock("@/pages/PhoneDetail/PhoneDetail", () => ({
  PhoneDetail: () => <div>Mock Phone Detail</div>,
}));
vi.mock("@/pages/CartPage/CartPage", () => ({
  CartPage: () => <div>Mock Cart Page</div>,
}));
vi.mock("@/components/Header/Header", () => ({
  Header: () => <div>Mock Header</div>,
}));

describe("App routing", () => {
  it("renders Home page at '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Mock Home")).toBeInTheDocument();
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
  });

  it("renders PhoneDetail page at '/detalle/123'", () => {
    render(
      <MemoryRouter initialEntries={["/detalle/123"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Mock Phone Detail")).toBeInTheDocument();
  });

  it("renders CartPage at '/carrito'", () => {
    render(
      <MemoryRouter initialEntries={["/carrito"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Mock Cart Page")).toBeInTheDocument();
  });
});
