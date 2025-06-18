import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLoading } from "./useLoading";

describe("useLoading", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should increment progress while loading is true", () => {
    const { result } = renderHook(() => useLoading(true, false));

    expect(result.current.progress).toBe(0);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.progress).toBeGreaterThan(0);
    expect(result.current.progress).toBeLessThanOrEqual(90);
  });

  it("should not change progress if loading is false and hasData is false", () => {
    const { result } = renderHook(() => useLoading(false, false));

    expect(result.current.progress).toBe(0);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.progress).toBe(0);
  });
});
