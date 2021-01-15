import React from "react";
import styled from "styled-components";

const handleDefaultFontSize = ($fontsize) => {
  switch ($fontsize) {
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "footerparagraphs":
      return ({ theme }) => theme.fontSize.small;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleColor = ($color) => {
  switch ($color) {
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleDefaultPadding = ($padding) => {
  switch ($padding) {
    case "footerparagraphs":
      return "0.5rem 0 0 0";
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled.p`
  padding: ${({ $padding }) => handleDefaultPadding($padding)};
  color: ${({ $color }) => handleColor($color)};
  font-family: ${({ $fontfamily }) => $fontfamily ? ({ theme }) => theme.fontFamily.secondary : ({ theme }) => theme.fontFamily.primary};
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};
  letter-spacing: ${({ $letterspacing }) => $letterspacing ? $letterspacing : "0"};
  text-align: ${({ $align }) => $align ? "center": "left"};
  font-weight: ${({ $fontweight }) => $fontweight ? $fontweight : "400"};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $fontsize }) => handleMediumFontSize($fontsize)};
  }
`;

const ParagraphElement = ({ render, align, color, fontfamily, fontsize, fontweight, letterspacing, padding }) => {
  return (
    <ComponentContainer
      $align={align}
      $color={color}
      $fontfamily={fontfamily}
      $fontsize={fontsize}
      $fontweight={fontweight}
      $letterspacing={letterspacing}
      $padding={padding}
    >
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;