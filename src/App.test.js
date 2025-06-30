import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/features/Header", () => ({
  Header: () => <header data-testid="header">Mock Header</header>,
}));

jest.mock("./components/features/Articles", () => ({
  Articles: () => (
    <section data-testid="articles">Mock Articles Section</section>
  ),
}));

describe("App component", () => {
  test("renders Header and Articles", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toHaveTextContent("Mock Header");
    expect(screen.getByTestId("articles")).toBeInTheDocument();
    expect(screen.getByTestId("articles")).toHaveTextContent(
      "Mock Articles Section",
    );
  });

  test("has base layout styles applied", () => {
    render(<App />);
    const root = screen.getByTestId("app-root");
    expect(root).toHaveClass("min-h-screen");
    expect(root).toHaveClass("bg-white");
    expect(root).toHaveClass("font-serif");
  });
});
