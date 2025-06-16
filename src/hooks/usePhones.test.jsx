import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { usePhones } from "./usePhones";
import * as phoneService from "@/services/phones";

const mockPhones = [
  { id: "1", name: "Phone A" },
  { id: "1", name: "Phone A" }, // duplicate
  { id: "2", name: "Phone B" },
];

vi.mock("@/services/phones", () => ({
  getPhones: vi.fn(),
}));

describe("usePhones", () => {
  it("should fetch and return unique phones", async () => {
    phoneService.getPhones.mockResolvedValue(mockPhones);

    const { result } = renderHook(() => usePhones("test"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.phones).toEqual([
      { id: "1", name: "Phone A" },
      { id: "2", name: "Phone B" },
    ]);
  });

  it("should set loading true while fetching", async () => {
    let resolveFn;
    const promise = new Promise((res) => {
      resolveFn = res;
    });
    phoneService.getPhones.mockReturnValueOnce(promise);

    const { result } = renderHook(() => usePhones("test"));

    expect(result.current.loading).toBe(true);

    resolveFn([]);
    await waitFor(() => expect(result.current.loading).toBe(false));
  });
});
