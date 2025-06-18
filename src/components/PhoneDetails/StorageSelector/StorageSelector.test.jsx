import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StorageSelector } from "./StorageSelector";

describe("StorageSelector", () => {
  const options = [{ capacity: "64GB" }, { capacity: "128GB" }];
  const selected = { capacity: "64GB" };

  it("should render all storage options", () => {
    render(
      <StorageSelector
        options={options}
        selected={selected}
        onSelect={() => {}}
      />
    );
    expect(screen.getByRole("button", { name: "64GB" })).toBeVisible();
    expect(screen.getByRole("button", { name: "128GB" })).toBeVisible();
  });

  it("should call onSelect when a button is clicked", async () => {
    const onSelect = vi.fn();
    render(
      <StorageSelector options={options} selected={null} onSelect={onSelect} />
    );
    await userEvent.click(screen.getByRole("button", { name: "128GB" }));
    expect(onSelect).toHaveBeenCalledWith({ capacity: "128GB" });
  });

  it("should apply selected class to the selected option", () => {
    render(
      <StorageSelector
        options={options}
        selected={selected}
        onSelect={() => {}}
      />
    );
    const selectedButton = screen.getByRole("button", { name: "64GB" });
    expect(selectedButton.className).toMatch(/selected/);
  });
});
