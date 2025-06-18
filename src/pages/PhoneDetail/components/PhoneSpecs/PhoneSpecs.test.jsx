import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhoneSpecs } from "./PhoneSpecs";

describe("PhoneSpecs", () => {
  const mockSpecs = {
    screenSize: "6.1 inches",
    battery: "3000mAh",
    processor: "A14 Bionic",
  };

  it("should render the section title", () => {
    render(<PhoneSpecs specs={mockSpecs} />);
    expect(
      screen.getByRole("heading", { name: /specifications/i })
    ).toBeVisible();
  });

  it("should render all specification labels and values", () => {
    render(<PhoneSpecs specs={mockSpecs} />);
    expect(
      screen.getByRole("columnheader", { name: /screen size/i })
    ).toBeVisible();
    expect(screen.getByRole("cell", { name: /6.1 inches/i })).toBeVisible();

    expect(
      screen.getByRole("columnheader", { name: /battery/i })
    ).toBeVisible();
    expect(screen.getByRole("cell", { name: /3000mah/i })).toBeVisible();

    expect(
      screen.getByRole("columnheader", { name: /processor/i })
    ).toBeVisible();
    expect(screen.getByRole("cell", { name: /a14 bionic/i })).toBeVisible();
  });
});
