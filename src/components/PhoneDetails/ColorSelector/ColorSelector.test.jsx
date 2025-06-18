import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ColorSelector } from "./ColorSelector";

describe("ColorSelector", () => {
  const colors = [
    { name: "Black", hexCode: "#000000" },
    { name: "White", hexCode: "#FFFFFF" },
  ];

  it("should render all color options", () => {
    render(
      <ColorSelector colors={colors} selected={null} onSelect={() => {}} />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.queryByText("Black")).not.toBeInTheDocument();
  });

  it("should show selected color name", () => {
    render(
      <ColorSelector colors={colors} selected={colors[0]} onSelect={() => {}} />
    );

    expect(screen.getByText("Black")).toBeVisible();
  });

  it("should call onSelect when a color is clicked", async () => {
    const handleSelect = vi.fn();
    render(
      <ColorSelector colors={colors} selected={null} onSelect={handleSelect} />
    );
    const button = screen.getByLabelText("Select color Black");
    await userEvent.click(button);
    expect(handleSelect).toHaveBeenCalledWith(colors[0]);
  });
});
