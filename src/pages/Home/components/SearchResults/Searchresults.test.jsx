import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchResults } from "./SearchResults";

describe("SearchResults", () => {
  it("should render the number of results", () => {
    render(<SearchResults results={5} />);
    expect(screen.getByText("5 results")).toBeVisible();
  });
});
