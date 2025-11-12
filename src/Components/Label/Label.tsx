import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "#a0a0a0" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: 14px;

  &::after {
    content: ${(props) => (props.required ? '"*"' : '""')};
    color: #dc3545;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  disabled = false,
  required = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      disabled={disabled}
      required={required}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};
