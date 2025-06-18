import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("should render the input with placeholder", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText("Search for a smartphone...")
    ).toBeVisible();
  });

  it("should call onSearch with typed value", async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText("Search for a smartphone...");
    await userEvent.type(input, "iphone");
    expect(onSearch).toHaveBeenCalled();
    expect(onSearch).toHaveBeenLastCalledWith("iphone");
  });
});
