import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PhoneImage } from "./PhoneImage";

describe("PhoneImage", () => {
  const mockOption = {
    name: "Blue",
    imageUrl: "https://example.com/image.jpg",
  };

  it("should render image with correct src and alt", () => {
    render(<PhoneImage option={mockOption} name="iPhone" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockOption.imageUrl);
    expect(image).toHaveAttribute("alt", "iPhone Blue");
  });
});
