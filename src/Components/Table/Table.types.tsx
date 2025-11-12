export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  header?: boolean;
}

export interface TableFooterProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
