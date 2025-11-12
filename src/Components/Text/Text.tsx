import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.div<TextProps>`
  color: ${(props) => (props.disabled ? "#a0a0a0" : props.color || "#333")};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  text-align: ${(props) => props.align || "left"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.fontSize ? `calc(${props.fontSize} * 0.9)` : "14px")};
  }
`;

export const Text: React.FC<TextProps> = ({
  children,
  variant = "p",
  disabled = false,
  ...props
}) => {
  return (
    <StyledText as={variant} disabled={disabled} {...props}>
      {children}
    </StyledText>
  );
};
