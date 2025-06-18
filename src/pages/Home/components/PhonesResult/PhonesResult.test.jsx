import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhonesResult } from "./PhonesResult";

vi.mock("@/components/PhoneCard/PhoneCard", () => ({
  PhoneCard: ({ phone }) => <li>{phone.name}</li>,
}));

describe("PhonesResult", () => {
  it("should render a list of phones when results exist", () => {
    const phones = [
      { id: 1, name: "Phone 1" },
      { id: 2, name: "Phone 2" },
    ];
    render(<PhonesResult phones={phones} />);
    expect(screen.getByText("Phone 1")).toBeVisible();
    expect(screen.getByText("Phone 2")).toBeVisible();
  });

  it("should render 'Sin resultados' when no results exist", () => {
    render(<PhonesResult phones={[]} />);
    expect(screen.getByText("Sin resultados")).toBeVisible();
  });
});
