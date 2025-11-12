import React from "react";
import styled from "styled-components";
import {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor || "#ffffff")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: #ffffff;
  font-weight: 600;
`;

const StyledTableRow = styled.tr<TableRowProps>`
  border-bottom: 1px solid #e0e0e0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "transparent" : "#f8f9fa")};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px 16px;
  text-align: ${(props) => props.align || "left"};
  font-weight: ${(props) => (props.header ? "600" : "400")};

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const StyledTableHeaderCell = styled.th<TableCellProps>`
  padding: 16px;
  text-align: ${(props) => props.align || "left"};
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.backgroundColor || "#f8f9fa"};
  font-weight: 600;
  border-top: 2px solid #dee2e6;
`;

const StyledTableBody = styled.tbody``;

export const Table: React.FC<TableProps> = ({ children, disabled = false, backgroundColor }) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTable>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({ children, backgroundColor }) => {
  return <StyledTableHeader backgroundColor={backgroundColor}>{children}</StyledTableHeader>;
};

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>;
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  header = false,
}) => {
  return header ? (
    <StyledTableHeaderCell align={align}>{children}</StyledTableHeaderCell>
  ) : (
    <StyledTableCell align={align}>{children}</StyledTableCell>
  );
};

export const TableFooter: React.FC<TableFooterProps> = ({ children, backgroundColor }) => {
  return <StyledTableFooter backgroundColor={backgroundColor}>{children}</StyledTableFooter>;
};
