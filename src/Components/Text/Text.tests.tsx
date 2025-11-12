import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text Component", () => {
  test("renders text and is visible", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText(/Test Text/i)).toBeVisible();
  });

  test("color changes when disabled", () => {
    const { container, rerender } = render(<Text>Test</Text>);
    const textElement = container.firstChild as HTMLElement;

    rerender(<Text disabled>Test</Text>);
    const disabledStyle = window.getComputedStyle(textElement);

    expect(disabledStyle.cursor).toBe("not-allowed");
    expect(disabledStyle.color).toBe("rgb(160, 160, 160)");
  });
});
