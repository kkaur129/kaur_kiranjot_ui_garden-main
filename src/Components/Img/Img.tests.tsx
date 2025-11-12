import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders image and is visible", () => {
    render(<Img src="test.jpg" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeVisible();
  });

  test("appearance changes when disabled", () => {
    const { rerender } = render(<Img src="test.jpg" alt="Test" />);
    const imgElement = screen.getByAltText(/Test/i);

    const enabledStyle = window.getComputedStyle(imgElement);
    const enabledFilter = enabledStyle.filter;

    rerender(<Img src="test.jpg" alt="Test" disabled />);

    const disabledStyle = window.getComputedStyle(imgElement);
    const disabledFilter = disabledStyle.filter;

    expect(disabledFilter).not.toBe(enabledFilter);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
