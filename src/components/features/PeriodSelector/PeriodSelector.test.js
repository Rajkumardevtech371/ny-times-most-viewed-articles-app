import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PeriodSelector from "./PeriodSelector";

// 🧪 Mock SectionTitle
jest.mock("../../ui/SectionTitle", () => ({
  __esModule: true,
  SectionTitle: ({ children }) => (
    <h3 data-testid="section-title">{children}</h3>
  ),
}));

// 🧪 Mock PeriodButton
jest.mock("../../ui/PeriodButton", () => ({
  __esModule: true,
  PeriodButton: ({ label, testId, onClick, disabled }) => (
    <button onClick={onClick} data-testid={testId} disabled={disabled}>
      {label}
    </button>
  ),
}));

describe("PeriodSelector", () => {
  const onPeriodChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the section title", () => {
    render(
      <PeriodSelector
        period={7}
        onPeriodChange={onPeriodChange}
        disabled={false}
      />,
    );
    expect(screen.getByTestId("section-title")).toHaveTextContent(
      "Time Period",
    );
  });

  test("renders all period buttons", () => {
    render(
      <PeriodSelector
        period={7}
        onPeriodChange={onPeriodChange}
        disabled={false}
      />,
    );

    expect(screen.getByTestId("period-1-btn")).toHaveTextContent("1 Day");
    expect(screen.getByTestId("period-7-btn")).toHaveTextContent("7 Days");
    expect(screen.getByTestId("period-30-btn")).toHaveTextContent("30 Days");
  });

  test("calls onPeriodChange with correct value when clicked", () => {
    render(
      <PeriodSelector
        period={1}
        onPeriodChange={onPeriodChange}
        disabled={false}
      />,
    );

    fireEvent.click(screen.getByTestId("period-30-btn"));
    expect(onPeriodChange).toHaveBeenCalledWith(30);

    fireEvent.click(screen.getByTestId("period-7-btn"));
    expect(onPeriodChange).toHaveBeenCalledWith(7);
  });

  test("disables buttons when disabled=true", () => {
    render(
      <PeriodSelector
        period={1}
        onPeriodChange={onPeriodChange}
        disabled={true}
      />,
    );
    expect(screen.getByTestId("period-1-btn")).toBeDisabled();
    expect(screen.getByTestId("period-7-btn")).toBeDisabled();
    expect(screen.getByTestId("period-30-btn")).toBeDisabled();
  });
});
