import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) =>
    props.size === "small" ? "8px 16px" : props.size === "large" ? "16px 32px" : "12px 24px"};
  font-size: ${(props) =>
    props.size === "small" ? "14px" : props.size === "large" ? "18px" : "16px"};
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : props.backgroundColor || "#007bff")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "#ffffff")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "#d3d3d3"
        : props.backgroundColor
          ? `${props.backgroundColor}dd`
          : "#0056b3"};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) => (props.disabled ? "none" : "0 4px 8px rgba(0, 0, 0, 0.2)")};
  }

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.size === "small" ? "6px 12px" : props.size === "large" ? "12px 24px" : "10px 20px"};
    font-size: ${(props) =>
      props.size === "small" ? "12px" : props.size === "large" ? "16px" : "14px"};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  disabled = false,
  backgroundColor,
  size = "medium",
  fullWidth = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
