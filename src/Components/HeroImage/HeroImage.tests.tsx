import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders hero image and is visible", () => {
    render(<HeroImage src="test.jpg" alt="Test Hero" title="Test Title" />);
    expect(screen.getByText(/Test Title/i)).toBeVisible();
  });

  test("appearance changes when disabled", () => {
    const { container, rerender } = render(<HeroImage src="test.jpg" alt="Test" title="Test" />);
    const heroContainer = container.firstChild as HTMLElement;

    const enabledStyle = window.getComputedStyle(heroContainer);
    const enabledOpacity = enabledStyle.opacity;

    rerender(<HeroImage src="test.jpg" alt="Test" title="Test" disabled />);

    const disabledStyle = window.getComputedStyle(heroContainer);
    const disabledOpacity = disabledStyle.opacity;

    expect(disabledOpacity).not.toBe(enabledOpacity);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
