import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  test("renders card and is visible", () => {
    render(<Card>Test Card Content</Card>);
    expect(screen.getByText(/Test Card Content/i)).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { container, rerender } = render(<Card>Test Content</Card>);
    const cardElement = container.firstChild as HTMLElement;

    const enabledStyle = window.getComputedStyle(cardElement);
    const enabledBgColor = enabledStyle.backgroundColor;

    rerender(<Card disabled>Test Content</Card>);

    const disabledStyle = window.getComputedStyle(cardElement);
    const disabledBgColor = disabledStyle.backgroundColor;

    expect(disabledBgColor).not.toBe(enabledBgColor);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
