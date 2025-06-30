import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders with children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when 'disabled' prop is true", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );

    const btn = screen.getByText("Disabled");
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies correct variant class", () => {
    render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByText("Primary");
    expect(btn.className).toMatch(/primary/);
  });

  test("renders as <a> when href is provided", () => {
    render(
      <Button href="https://example.com" target="_blank">
        Go to Link
      </Button>,
    );
    const link = screen.getByText("Go to Link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
