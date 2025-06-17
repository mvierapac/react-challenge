import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useLoading } from "./useLoading";

describe("useLoading", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("increases progress up to 90 while loading", () => {
    const { result } = renderHook(() => useLoading(true, false));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.progress).toBeGreaterThan(0);
    expect(result.current.progress).toBeLessThanOrEqual(90);
    expect(result.current.reveal).toBe(false);
  });

  it("sets progress to 100 and reveal to true after loading completes and hasData is true", () => {
    let loading = true;
    let hasData = false;

    const { result, rerender } = renderHook(() => useLoading(loading, hasData));

    act(() => {
      vi.advanceTimersByTime(500);
    });

    loading = false;
    hasData = true;
    rerender();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.progress).toBe(100);
    expect(result.current.reveal).toBe(true);
  });

  it("only reveals once when once=true", () => {
    let loading = true;
    let hasData = false;

    const { result, rerender } = renderHook(() =>
      useLoading(loading, hasData, { once: true })
    );

    loading = false;
    hasData = true;
    rerender();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.reveal).toBe(true);

    loading = true;
    hasData = false;
    rerender();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    loading = false;
    hasData = true;
    rerender();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.reveal).toBe(true);
  });
});
