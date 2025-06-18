import { describe, it, expect } from "vitest";
import { removeDuplicatesById } from "./removeDuplicatesById";

describe("removeDuplicatesById", () => {
  it("should remove duplicate objects based on id", () => {
    const input = [
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
      { id: 1, name: "Item A (duplicate)" },
      { id: 3, name: "Item C" },
      { id: 2, name: "Item B (duplicate)" },
    ];

    const result = removeDuplicatesById(input);

    expect(result).toEqual([
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
      { id: 3, name: "Item C" },
    ]);
  });

  it("should return the same array if there are no duplicates", () => {
    const input = [
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
      { id: 3, name: "Item C" },
    ];

    const result = removeDuplicatesById(input);

    expect(result).toEqual(input);
  });

  it("should return an empty array if input is empty", () => {
    const result = removeDuplicatesById([]);
    expect(result).toEqual([]);
  });
});
