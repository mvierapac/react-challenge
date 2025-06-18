import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LoadingBar } from "./LoadingBar";

describe("LoadingBar", () => {
  it("renders with correct width when reveal is false", () => {
    const { container } = render(<LoadingBar progress={60} reveal={false} />);
    const bar = container.querySelector(".loading-bar");
    expect(bar).toBeVisible();
    expect(bar).toHaveStyle({ width: "60%" });
  });
});
