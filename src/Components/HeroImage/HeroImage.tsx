import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.div<{ height?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "400px"};
  overflow: hidden;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    height: ${(props) => (props.height ? `calc(${props.height} * 0.6)` : "250px")};
  }
`;

const HeroImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
`;

const HeroOverlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.overlayColor || "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin: 0 0 16px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  disabled = false,
  height,
  overlayColor,
  ...props
}) => {
  return (
    <HeroContainer height={height} disabled={disabled} {...props}>
      <HeroImg src={src} alt={alt} disabled={disabled} />
      {(title || subtitle) && (
        <HeroOverlay overlayColor={overlayColor}>
          {title && <HeroTitle>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        </HeroOverlay>
      )}
    </HeroContainer>
  );
};
