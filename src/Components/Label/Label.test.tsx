import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from ".";

describe("Label Component", () => {
  test("renders label and is visible", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText(/Test Label/i)).toBeVisible();
  });

  test("color changes when disabled", () => {
    const { container, rerender } = render(<Label>Test</Label>);
    const labelElement = container.firstChild as HTMLElement;

    rerender(<Label disabled>Test</Label>);
    const disabledStyle = window.getComputedStyle(labelElement);

    expect(disabledStyle.cursor).toBe("not-allowed");
    expect(disabledStyle.opacity).toBe("0.6");
  });
});
