import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

describe("Dropdown Component", () => {
  test("renders dropdown and is visible", () => {
    render(<Dropdown options={options} placeholder="Select" />);
    expect(screen.getByText(/Select/i)).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { container, rerender } = render(<Dropdown options={options} />);
    const selectElement = container.querySelector("select") as HTMLElement;

    const enabledStyle = window.getComputedStyle(selectElement);
    const enabledBg = enabledStyle.backgroundColor;

    rerender(<Dropdown options={options} disabled />);

    const disabledStyle = window.getComputedStyle(selectElement);
    const disabledBg = disabledStyle.backgroundColor;

    expect(disabledBg).not.toBe(enabledBg);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
