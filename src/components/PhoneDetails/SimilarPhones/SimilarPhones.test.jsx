import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SimilarPhones } from "./SimilarPhones";

vi.mock("@/components/PhoneCard/PhoneCard", () => ({
  PhoneCard: ({ phone }) => <div>{phone.name}</div>,
}));

describe("SimilarPhones", () => {
  const phones = [
    { id: "1", name: "Phone One" },
    { id: "2", name: "Phone Two" },
  ];

  it("should render title and phones", () => {
    render(<SimilarPhones phones={phones} />);
    expect(screen.getByText("Similar items")).toBeInTheDocument();
    expect(screen.getByText("Phone One")).toBeInTheDocument();
    expect(screen.getByText("Phone Two")).toBeInTheDocument();
  });

  it("should return null when no phones", () => {
    const { container } = render(<SimilarPhones phones={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
