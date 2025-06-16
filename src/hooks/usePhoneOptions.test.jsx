import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePhoneOptions } from "./usePhoneOptions";

const mockPhone = {
  colorOptions: [
    { name: "Black", hexCode: "#000000", imageUrl: "black.jpg" },
    { name: "White", hexCode: "#ffffff", imageUrl: "white.jpg" },
  ],
  storageOptions: [{ capacity: "128GB" }, { capacity: "256GB" }],
};

describe("usePhoneOptions", () => {
  it("should set default color and storage", () => {
    const { result } = renderHook(() => usePhoneOptions(mockPhone));

    expect(result.current.selectedColorOption).toEqual(
      mockPhone.colorOptions[0]
    );
    expect(result.current.selectedStorage).toEqual(mockPhone.storageOptions[0]);
    expect(result.current.canAdd).toBe(true);
  });

  it("should return canAdd as false when options are not set", () => {
    const { result } = renderHook(() => usePhoneOptions(null));

    expect(result.current.selectedColorOption).toBe(null);
    expect(result.current.selectedStorage).toBe(null);
    expect(result.current.canAdd).toBe(false);
  });
});
