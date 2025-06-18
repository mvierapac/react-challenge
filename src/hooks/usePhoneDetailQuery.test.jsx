import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePhoneDetailQuery } from "./usePhoneDetailQuery";
import * as phoneService from "@/services/phones";

vi.mock("@/services/phones", () => ({
  getPhoneById: vi.fn(),
}));

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

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("usePhoneDetailQuery", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch phone data and merge specs", async () => {
    phoneService.getPhoneById.mockResolvedValueOnce(mockPhone);

    const { result } = renderHook(() => usePhoneDetailQuery("1"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data.specs.brand).toBe("BrandY");
    expect(result.current.data.specs.storage).toBe("128GB");
  });

  it("should handle error if fetch fails", async () => {
    phoneService.getPhoneById.mockRejectedValueOnce(new Error("Error"));

    const { result } = renderHook(() => usePhoneDetailQuery("1"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });
});
