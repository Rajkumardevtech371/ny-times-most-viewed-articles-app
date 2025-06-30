import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  test("renders children correctly", () => {
    render(
      <Card>
        <p>Test content inside card</p>
      </Card>,
    );
    expect(screen.getByText("Test content inside card")).toBeInTheDocument();
  });

  test("applies default class names", () => {
    render(<Card>Default Class Check</Card>);
    const card = screen.getByTestId("card");
    expect(card.className).toMatch(/bg-white/);
    expect(card.className).toMatch(/rounded-md/);
    expect(card.className).toMatch(/shadow-sm/);
    expect(card.className).toMatch(/border/);
  });

  test("merges additional className from props", () => {
    render(<Card className="custom-class">Card with extra class</Card>);
    const card = screen.getByTestId("card");
    expect(card.className).toMatch(/custom-class/);
  });

  test("passes additional props to div", () => {
    render(
      <Card data-testid="card-id">
        <span>Content</span>
      </Card>,
    );
    expect(screen.getByTestId("card-id")).toBeInTheDocument();
  });
});
