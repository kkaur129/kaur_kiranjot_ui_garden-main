import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor || "#ffffff")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.disabled ? "#e0e0e0" : "#007bff")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  placeholder = "Select an option",
  backgroundColor,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
