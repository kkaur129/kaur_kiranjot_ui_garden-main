import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor || "#ffffff")};
  border-radius: 12px;
  box-shadow: ${(props) => (props.disabled ? "none" : "0 4px 12px rgba(0, 0, 0, 0.1)")};
  padding: ${(props) => props.padding || "24px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  max-width: ${(props) => props.maxWidth || "100%"};
  width: 100%;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? "none"
        : props.hoverable
          ? "0 8px 24px rgba(0, 0, 0, 0.15)"
          : "0 4px 12px rgba(0, 0, 0, 0.1)"};
    transform: ${(props) =>
      props.disabled ? "none" : props.hoverable ? "translateY(-4px)" : "none"};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.padding || "16px"};
  }
`;

const CardHeader = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardContent = styled.div`
  color: #666;
  line-height: 1.6;
`;

const CardFooter = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
`;

export const Card: React.FC<CardProps> = ({
  children,
  title,
  footer,
  disabled = false,
  backgroundColor,
  padding,
  maxWidth,
  hoverable = false,
  ...props
}) => {
  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      padding={padding}
      maxWidth={maxWidth}
      hoverable={hoverable}
      {...props}
    >
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};
