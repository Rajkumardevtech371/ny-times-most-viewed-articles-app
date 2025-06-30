import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

const ButtonWrapper = ({ label = "Submit" }) => {
  const handleClick = jest.fn();
  return <Button onClick={handleClick}>{label}</Button>;
};

describe("Button integration with parent", () => {
  test("Button in a wrapper renders and functions correctly", () => {
    render(<ButtonWrapper label="Send" />);
    const button = screen.getByText("Send");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });

  test("Button receives additional props from parent", () => {
    render(<ButtonWrapper label="Download" />);
    const button = screen.getByRole("button", { name: /download/i });
    expect(button).toBeVisible();
  });
});
