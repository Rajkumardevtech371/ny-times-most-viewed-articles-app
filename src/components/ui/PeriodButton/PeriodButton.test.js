import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PeriodButton from "./PeriodButton";

describe("PeriodButton", () => {
  const defaultProps = {
    label: "7 Days",
    onClick: jest.fn(),
    testId: "period-btn",
    disabled: false,
    active: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with correct label", () => {
    render(<PeriodButton {...defaultProps} />);
    expect(screen.getByText("7 Days")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    render(<PeriodButton {...defaultProps} />);
    fireEvent.click(screen.getByTestId("period-btn"));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    render(<PeriodButton {...defaultProps} disabled={true} />);
    const btn = screen.getByTestId("period-btn");
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  test("applies active styling", () => {
    render(<PeriodButton {...defaultProps} active={true} />);
    const btn = screen.getByTestId("period-btn");
    expect(btn.className).toMatch(/bg-black/);
    expect(btn.className).toMatch(/text-white/);
  });

  test("applies disabled styling", () => {
    render(<PeriodButton {...defaultProps} disabled={true} />);
    const btn = screen.getByTestId("period-btn");
    expect(btn.className).toMatch(/opacity-50/);
    expect(btn.className).toMatch(/cursor-not-allowed/);
  });
});
