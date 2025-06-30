import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

// Mock Button to simplify testing
jest.mock("../../ui/Button", () => ({
  __esModule: true,
  Button: ({ children, ...props }) => (
    <button {...props}>{children}</button>
  ),
}));

describe("ErrorMessage component", () => {
  test("renders error message and heading", () => {
    render(<ErrorMessage message="Something went wrong!" onRetry={() => {}} />);
    
    expect(screen.getByText("Unable to Load Articles")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    expect(screen.getByTestId("retry-btn")).toBeInTheDocument();
  });

  test("calls onRetry when 'Try Again' button is clicked", () => {
    const handleRetry = jest.fn();
    render(<ErrorMessage message="Failed to fetch data." onRetry={handleRetry} />);

    fireEvent.click(screen.getByTestId("retry-btn"));
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });
});
