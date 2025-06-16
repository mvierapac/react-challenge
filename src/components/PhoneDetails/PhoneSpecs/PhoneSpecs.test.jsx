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
    expect(screen.getByText("SPECIFICATIONS")).toBeInTheDocument();
  });

  it("should render all specification labels and values", () => {
    render(<PhoneSpecs specs={mockSpecs} />);
    expect(screen.getByText("SCREEN SIZE")).toBeInTheDocument();
    expect(screen.getByText("6.1 inches")).toBeInTheDocument();
    expect(screen.getByText("BATTERY")).toBeInTheDocument();
    expect(screen.getByText("3000mAh")).toBeInTheDocument();
    expect(screen.getByText("PROCESSOR")).toBeInTheDocument();
    expect(screen.getByText("A14 Bionic")).toBeInTheDocument();
  });
});
