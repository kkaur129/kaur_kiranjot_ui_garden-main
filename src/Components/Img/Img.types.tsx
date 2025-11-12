export interface ImgProps {
  src: string;
  alt: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}
