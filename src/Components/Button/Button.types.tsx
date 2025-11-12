export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onClick?: () => void;
}
