import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders radio button and is visible", () => {
    render(<RadioButton name="test" value="test" label="Test Radio" />);
    expect(screen.getByText(/Test Radio/i)).toBeVisible();
  });

  test("color changes when disabled", () => {
    const { container, rerender } = render(<RadioButton name="test" value="test" label="Test" />);
    const labelElement = container.querySelector("label") as HTMLElement;

    rerender(<RadioButton name="test" value="test" label="Test" disabled />);

    const disabledStyle = window.getComputedStyle(labelElement);

    expect(disabledStyle.cursor).toBe("not-allowed");
    expect(disabledStyle.opacity).toBe("0.6");
  });
});
