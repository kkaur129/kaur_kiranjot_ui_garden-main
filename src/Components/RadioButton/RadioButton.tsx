import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  padding: 8px;
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 18px;
  height: 18px;
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "#a0a0a0" : "#333")};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked = false,
  disabled = false,
  onChange,
  ...props
}) => {
  const handleChange = () => {
    if (onChange && !disabled) {
      onChange(value);
    }
  };

  return (
    <RadioContainer disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </RadioContainer>
  );
};
