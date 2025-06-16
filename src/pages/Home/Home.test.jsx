import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { usePhones } from "@/hooks/usePhones";

vi.mock("@/hooks/usePhones", () => ({
  usePhones: vi.fn(),
}));

vi.mock("@hooks/useDebounce.js", () => ({
  useDebounce: (v) => v,
}));

vi.mock("@components/SearchBar/SearchBar", () => ({
  SearchBar: ({ onSearch }) => (
    <input
      placeholder="mock search input"
      onChange={(e) => onSearch(e.target.value)}
    />
  ),
}));

vi.mock("@components/SearchResults/SearchResults", () => ({
  SearchResults: ({ results }) => <p>{results} results</p>,
}));

vi.mock("@/components/PhonesResult/PhonesResult", () => ({
  PhonesResult: ({ phones }) => (
    <ul>
      {phones.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  ),
}));

describe("Home", () => {
  it("renders search input, results count and phone list", () => {
    usePhones.mockReturnValue({
      phones: [
        { id: 1, name: "Phone A" },
        { id: 2, name: "Phone B" },
      ],
      loading: false,
    });

    render(<Home />);

    expect(
      screen.getByPlaceholderText("mock search input")
    ).toBeInTheDocument();
    expect(screen.getByText("2 results")).toBeInTheDocument();
    expect(screen.getByText("Phone A")).toBeInTheDocument();
    expect(screen.getByText("Phone B")).toBeInTheDocument();
  });
});
