import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPhones, getPhoneById } from "./phones";

const mockPhones = [
  { id: "1", name: "Phone A" },
  { id: "2", name: "Phone B" },
];

const mockPhone = {
  id: "1",
  name: "Phone A",
  brand: "Brand X",
  specs: {
    ram: "6GB",
  },
};

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("phones service", () => {
  it("should fetch list of phones", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPhones),
        })
      )
    );

    const data = await getPhones("test");
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/products?limit=21&search=test"),
      expect.objectContaining({
        headers: expect.objectContaining({ "x-api-key": expect.any(String) }),
      })
    );
    expect(data).toEqual(mockPhones);
  });

  it("should throw an error if phones fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve({ ok: false }))
    );

    await expect(getPhones("fail")).rejects.toThrow(
      "Error al cargar los teléfonos"
    );
  });

  it("should fetch phone by ID", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPhone),
        })
      )
    );

    const data = await getPhoneById("1");
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/products/1"),
      expect.objectContaining({
        headers: expect.objectContaining({ "x-api-key": expect.any(String) }),
      })
    );
    expect(data).toEqual(mockPhone);
  });

  it("should throw an error if getPhoneById fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve({ ok: false }))
    );

    await expect(getPhoneById("bad-id")).rejects.toThrow(
      "Error al cargar el teléfono"
    );
  });
});
