import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LoadingBar } from "./LoadingBar";

describe("LoadingBar", () => {
  it("renders with correct width when reveal is false", () => {
    render(<LoadingBar progress={60} reveal={false} />);
    const { container } = render(<LoadingBar progress={60} reveal={false} />);
    const bar = container.querySelector(".loading-bar");
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveStyle({ width: "60%" });
  });

  it("returns null when reveal is true", () => {
    const { container } = render(<LoadingBar progress={100} reveal={true} />);
    expect(container.firstChild).toBeNull();
  });
});
