import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneOptions } from "./PhoneOptions";

vi.mock("@/hooks/usePhoneOptions", () => ({
  usePhoneOptions: () => ({
    selectedColorOption: { name: "Red", imageUrl: "image.jpg" },
    setSelectedColorOption: vi.fn(),
    selectedStorage: { capacity: "128GB" },
    setSelectedStorage: vi.fn(),
    canAdd: true,
  }),
}));

vi.mock("@/context/CartContext", () => ({
  useCartContext: () => ({
    dispatch: vi.fn(),
  }),
}));

vi.mock("../PhoneImage/PhoneImage", () => ({
  PhoneImage: () => <div data-testid="phone-image">Image</div>,
}));

vi.mock("../StorageSelector/StorageSelector", () => ({
  StorageSelector: () => <div data-testid="storage-selector">Storage</div>,
}));

vi.mock("../ColorSelector/ColorSelector", () => ({
  ColorSelector: () => <div data-testid="color-selector">Color</div>,
}));

vi.mock("@/components/Button/Button", () => ({
  Button: ({ onClick, disabled, children }) => (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  ),
}));

describe("PhoneOptions", () => {
  const phoneMock = {
    id: "1",
    name: "iPhone X",
    basePrice: 999,
    storageOptions: [],
    colorOptions: [],
  };

  it("should render phone name and price", () => {
    render(<PhoneOptions phone={phoneMock} />);
    expect(screen.getByText("iPhone X")).toBeInTheDocument();
  });

  it("should call dispatch when Add button is clicked", () => {
    const { getByRole } = render(<PhoneOptions phone={phoneMock} />);
    const button = getByRole("button", { name: "AÑADIR" });
    fireEvent.click(button);
    expect(button).not.toBeDisabled();
  });
});
