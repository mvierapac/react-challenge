import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { usePhonesQuery } from "./usePhonesQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as phoneService from "@/services/phones";

vi.mock("@/services/phones", () => ({
  getPhones: vi.fn(),
}));

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const mockPhones = [
  { id: "1", name: "Phone A" },
  { id: "1", name: "Phone A" }, // duplicated
  { id: "2", name: "Phone B" },
];

describe("usePhonesQuery", () => {
  it("should fetch and return unique phones", async () => {
    phoneService.getPhones.mockResolvedValue(mockPhones);

    const { result } = renderHook(() => usePhonesQuery("test"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual([
      { id: "1", name: "Phone A" },
      { id: "2", name: "Phone B" },
    ]);
  });

  it("should set isLoading true while fetching", async () => {
    let resolveFn;
    const promise = new Promise((res) => {
      resolveFn = res;
    });
    phoneService.getPhones.mockReturnValueOnce(promise);

    const { result } = renderHook(() => usePhonesQuery("test"), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    resolveFn([]);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });
});
