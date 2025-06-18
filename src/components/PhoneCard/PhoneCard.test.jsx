import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { PhoneCard } from "./PhoneCard";

describe("PhoneCard", () => {
  it("should render phone information correctly", () => {
    const phone = {
      id: "1",
      name: "Pixel 7",
      brand: "Google",
      basePrice: 699,
      imageUrl: "pixel7.jpg",
    };

    render(
      <MemoryRouter>
        <PhoneCard phone={phone} />
      </MemoryRouter>
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/detalle/1");
    expect(screen.getByAltText("Pixel 7")).toHaveAttribute("src", "pixel7.jpg");
    expect(screen.getByText("GOOGLE")).toBeVisible();
    expect(screen.getByText("PIXEL 7")).toBeVisible();
    expect(screen.getByText("699 EUR")).toBeVisible();
  });
});
