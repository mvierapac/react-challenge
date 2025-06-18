import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BackButton } from "./BackButton";
import * as ReactRouter from "react-router-dom";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe("BackButton", () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  it("calls navigate(-1) on click", () => {
    render(<BackButton />);
    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(navigateMock).toHaveBeenCalledWith(-1);
  });

  it("renders a visible back button", () => {
    render(<BackButton />);
    const button = screen.getByRole("button", { name: /back/i });
    expect(button).toBeVisible();
  });
});
