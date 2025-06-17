import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhoneImage } from "./PhoneImage";

describe("PhoneImage", () => {
  const mockImages = [
    { name: "Black", imageUrl: "/black.png" },
    { name: "Silver", imageUrl: "/silver.png" },
  ];

  it("renders all phone images", () => {
    render(
      <PhoneImage
        images={mockImages}
        optionSelected={mockImages[0]}
        name="Phone X"
      />
    );

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveAttribute("src", "/black.png");
    expect(imgs[1]).toHaveAttribute("src", "/silver.png");
  });

  it("applies selected class to the selected image only", () => {
    render(
      <PhoneImage
        images={mockImages}
        optionSelected={mockImages[1]}
        name="Phone X"
      />
    );

    const imgs = screen.getAllByRole("img");

    expect(imgs[0].className).not.toContain("phone-image--selected");
    expect(imgs[1].className).toContain("phone-image--selected");
  });
});
