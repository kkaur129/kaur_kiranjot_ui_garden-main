import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { rerender } = render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);

    const enabledStyle = window.getComputedStyle(buttonElement);
    const enabledBgColor = enabledStyle.backgroundColor;

    rerender(<Button disabled>Test Button</Button>);

    const disabledStyle = window.getComputedStyle(buttonElement);
    const disabledBgColor = disabledStyle.backgroundColor;

    expect(disabledBgColor).not.toBe(enabledBgColor);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
