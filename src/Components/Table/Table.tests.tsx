import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "./Table";

describe("Table Component", () => {
  test("renders table and is visible", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell header>Header</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByText(/Header/i)).toBeVisible();
    expect(screen.getByText(/Content/i)).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { rerender } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const tableElement = screen.getByRole("table");
    const enabledStyle = window.getComputedStyle(tableElement);
    const enabledBgColor = enabledStyle.backgroundColor;

    rerender(
      <Table disabled>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const disabledStyle = window.getComputedStyle(tableElement);
    const disabledBgColor = disabledStyle.backgroundColor;

    expect(disabledBgColor).not.toBe(enabledBgColor);
    expect(disabledStyle.cursor).toBe("not-allowed");
  });
});
