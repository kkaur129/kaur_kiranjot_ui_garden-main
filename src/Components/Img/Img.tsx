import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "0"};
  object-fit: ${(props) => props.objectFit || "cover"};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Img: React.FC<ImgProps> = ({ src, alt, disabled = false, ...props }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} {...props} />;
};
