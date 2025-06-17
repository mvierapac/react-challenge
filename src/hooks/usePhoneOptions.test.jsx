import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { usePhoneOptions } from "./usePhoneOptions";

const mockPhone = {
  colorOptions: [
    { name: "Black", hex: "#000000" },
    { name: "Silver", hex: "#CCCCCC" },
  ],
  storageOptions: ["128GB", "256GB"],
};

describe("usePhoneOptions", () => {
  it("sets default color on phone load", () => {
    const { result } = renderHook(() => usePhoneOptions(mockPhone));

    expect(result.current.selectedColorOption).toEqual(
      mockPhone.colorOptions[0]
    );
    expect(result.current.selectedStorage).toBe(null);
    expect(result.current.canAdd).toBe(false);
  });

  it("can set color and storage manually", () => {
    const { result } = renderHook(() => usePhoneOptions(mockPhone));

    act(() => {
      result.current.setSelectedStorage("128GB");
    });

    expect(result.current.selectedStorage).toBe("128GB");
    expect(result.current.canAdd).toBe(true);
  });

  it("does not set color if phone is null", () => {
    const { result } = renderHook(() => usePhoneOptions(null));
    expect(result.current.selectedColorOption).toBe(null);
  });
});
