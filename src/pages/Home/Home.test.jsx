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

vi.mock("@/hooks/useLoading", () => ({
  useLoading: () => ({
    reveal: true,
    progress: 100,
  }),
}));

vi.mock("./components/SearchBar/SearchBar", () => ({
  SearchBar: ({ onSearch }) => (
    <input
      placeholder="mock search input"
      onChange={(e) => onSearch(e.target.value)}
    />
  ),
}));

vi.mock("./components/SearchResults/SearchResults", () => ({
  SearchResults: ({ results }) => <p>{results} results</p>,
}));

vi.mock("./components/PhonesResult/PhonesResult", () => ({
  PhonesResult: ({ phones }) => (
    <ul>
      {phones.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  ),
}));

vi.mock("@/components/LoadingBar/LoadingBar", () => ({
  LoadingBar: ({ progress }) => <div>Loading {progress}%</div>,
}));

describe("Home", () => {
  it("renders search input, results count, loading bar and phone list", () => {
    usePhones.mockReturnValue({
      phones: [
        { id: 1, name: "Phone A" },
        { id: 2, name: "Phone B" },
      ],
      loading: false,
    });

    render(<Home />);

    expect(screen.getByPlaceholderText("mock search input")).toBeVisible();
    expect(screen.getByText("2 results")).toBeVisible();
    expect(screen.getByText("Phone A")).toBeVisible();
    expect(screen.getByText("Phone B")).toBeVisible();
  });
});
