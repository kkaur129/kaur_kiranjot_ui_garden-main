export interface TextProps {
  children: React.ReactNode;
  variant?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  align?: "left" | "center" | "right";
}
