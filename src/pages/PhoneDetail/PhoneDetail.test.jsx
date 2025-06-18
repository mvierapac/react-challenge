import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhoneDetail } from "./PhoneDetail";
import { usePhoneDetail } from "@/hooks/usePhoneDetail";
import { MemoryRouter, Route, Routes } from "react-router-dom";

vi.mock("@/hooks/usePhoneDetail", () => ({
  usePhoneDetail: vi.fn(),
}));

vi.mock("@/hooks/useLoading", () => ({
  useLoading: () => ({
    reveal: true,
    progress: 100,
  }),
}));

vi.mock("@/components/LoadingBar/LoadingBar", () => ({
  LoadingBar: ({ progress }) => <div>Loading {progress}%</div>,
}));

vi.mock("@/components/BackButton/BackButton", () => ({
  BackButton: () => <button>Back</button>,
}));

vi.mock("@components/PhoneDetails/PhoneOptions/PhoneOptions", () => ({
  PhoneOptions: ({ phone }) => <div>PhoneOptions: {phone.name}</div>,
}));

vi.mock("@components/PhoneDetails/PhoneSpecs/PhoneSpecs", () => ({
  PhoneSpecs: ({ specs }) => <div>PhoneSpecs: {specs?.os}</div>,
}));

vi.mock("@components/PhoneDetails/SimilarPhones/SimilarPhones", () => ({
  SimilarPhones: ({ phones }) => (
    <ul>
      {phones.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  ),
}));

describe("PhoneDetail", () => {
  it("renders nothing if phone is null", () => {
    usePhoneDetail.mockReturnValue({
      phone: null,
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/detalle/1"]}>
        <Routes>
          <Route path="/detalle/:id" element={<PhoneDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("PhoneOptions")).not.toBeInTheDocument();
  });
});
