import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { usePhoneDetail } from "./usePhoneDetail";
import * as phoneService from "@/services/phones";

const mockPhone = {
  id: "1",
  name: "Phone X",
  brand: "BrandY",
  description: "Test phone",
  specs: {
    ram: "6GB",
    storage: "128GB",
  },
};

vi.mock("@/services/phones", () => ({
  getPhoneById: vi.fn(),
}));

describe("usePhoneDetail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch phone data and merge specs", async () => {
    phoneService.getPhoneById.mockResolvedValueOnce(mockPhone);

    const { result } = renderHook(() => usePhoneDetail("1"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.phone).toBeDefined();
    expect(result.current.phone.specs.brand).toBe("BrandY");
    expect(result.current.phone.specs.storage).toBe("128GB");
    expect(result.current.error).toBeNull();
  });

  it("should set error if fetch fails", async () => {
    phoneService.getPhoneById.mockRejectedValueOnce(new Error("Error"));

    const { result } = renderHook(() => usePhoneDetail("1"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.phone).toBeNull();
    expect(result.current.error).toBe("Error");
  });
});
