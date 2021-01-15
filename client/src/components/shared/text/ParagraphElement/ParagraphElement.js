import React from "react";
import styled from "styled-components";

const handleDefaultFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "homestatstext":
    case "homestatsfigure":
    case "homestatsyear":
      return ({ theme }) => theme.fontSize.large;
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "footerparagraphs":
    case "homesummary":
      return ({ theme }) => theme.fontSize.small;
    case "homestatstext":
      return ({ theme }) => theme.fontSize.large;
    case "homestatsfigure":
    case "homestatsyear":
      return ({ theme }) => theme.fontSize.xLarge;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleLargeFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "footerparagraphs":
    case "homesummary":
      return ({ theme }) => theme.fontSize.small;
    case "homestatstext":
      return ({ theme }) => theme.fontSize.large;
    case "homestatsfigure":
    case "homestatsyear":
      return ({ theme }) => theme.fontSize.xxLarge;
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

const handleDefaultMargin = ($margin) => {
  switch ($margin) {
    case "homestatsyear":
      return "auto";
    default:
      return "0 0 0 0";
  }
};

const handleDefaultPadding = ($padding) => {
  switch ($padding) {
    case "footerparagraphs":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homestatstext":
      return "0 0 0 2rem";
    case "homestatsfigure":
      return "0 0 1rem 1rem";
    case "homestatsyear":
      return "0 0 2rem 0";
    case "homeoptions":
      return "0 0 2rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleSmallPadding = ($padding) => {
  switch ($padding) {
    case "footerparagraphs":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homeoptions":
      return "0 0 2rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleMediumPadding = ($padding) => {
  switch ($padding) {
    case "footerparagraphs":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homestatsyear":
      return "0 5rem 0 2rem";
    case "homeoptions":
      return "0 0 2rem 0";
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled.p`
  margin: ${({ $margin }) => handleDefaultMargin($margin)};
  padding: ${({ $padding }) => handleDefaultPadding($padding)};
  color: ${({ $color }) => handleColor($color)};
  font-family: ${({ $fontfamily }) => $fontfamily ? ({ theme }) => theme.fontFamily.secondary : ({ theme }) => theme.fontFamily.primary};
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};
  font-weight: ${({ $fontweight }) => $fontweight ? $fontweight : "400"};
  text-align: ${({ $align }) => $align ? "center": "left"};
  letter-spacing: ${({ $letterspacing }) => $letterspacing ? $letterspacing : "0"};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    padding: ${({ $padding }) => handleSmallPadding($padding)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: ${({ $padding }) => handleMediumPadding($padding)};
    font-size: ${({ $fontsize }) => handleMediumFontSize($fontsize)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ $fontsize }) => handleLargeFontSize($fontsize)};
  }
`;

const ParagraphElement = ({ render, align, color, fontfamily, fontsize, fontweight, letterspacing, margin, padding }) => {
  return (
    <ComponentContainer
      $align={align}
      $color={color}
      $fontfamily={fontfamily}
      $fontsize={fontsize}
      $fontweight={fontweight}
      $letterspacing={letterspacing}
      $margin={margin}
      $padding={padding}
    >
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;