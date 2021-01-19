import React from "react";
import styled from "styled-components";

const handleDefaultMargin = ($style) => {
  switch ($style) {
    case "homestatsyear":
      return "auto";
    default:
      return "0 0 0 0";
  }
};

const handleDefaultPadding = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homestatstext":
      return "0 0 0 2rem";
    case "homestatsfigure":
      return "0 0 1rem 1rem";
    case "homestatsyear":
    case "homeoptions":
    case "pricingoptionsbottom":
      return "0 0 2rem 0";
    case "pricingoptions":
      return "0 0 1rem 2rem";
    case "searchresultitem":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleSmallPadding = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homeoptions":
    case "pricingoptionsbottom":
      return "0 0 2rem 0";
    case "pricingoptions":
      return "0 0 1rem 2rem";
    case "searchresultitem":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleMediumPadding = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "0.5rem 0 0 0";
    case "homesummary":
      return "0 0 1rem 0";
    case "homestatsyear":
      return "0 5rem 0 2rem";
    case "homeoptions":
    case "pricingoptionsbottom":
      return "0 0 2rem 0";
    case "pricingoptions":
      return "0 0 1rem 2rem";
    case "searchresultitem":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleFontFamily = ($style) => {
  switch ($style) {
    case "footerparagraphs":
    case "homesummary":
    case "FooterParagraphElement_ParagraphElement":
      return ({ theme }) => theme.fontFamily.secondary;
    default:
      return ({ theme }) => theme.fontFamily.primary;
  }
};

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    case "homestatstext":
    case "homestatsfigure":
    case "homestatsyear":
      return ({ theme }) => theme.fontSize.large;
    case "searchresultitem":
    case "errormessage":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
    case "homesummary":
    case "pricingoptions":
    case "pricingoptionsbottom":
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

const handleLargeFontSize = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
    case "homesummary":
    case "pricingoptions":
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

const handleColor = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    case "blueDark":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleFontWeight = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "600";
    default:
      return "400";
  }
};

const handleTextAlign = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "center";
    default:
      return "left";
  }
};

const handleLetterSpacing = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_ParagraphElement":
      return "0.2rem";
    default:
      return "0";
  }
};

const ComponentContainer = styled.p`
  margin: ${({ $style }) => handleDefaultMargin($style)};
  padding: ${({ $style }) => handleDefaultPadding($style)};
  font-family: ${({ $style }) => handleFontFamily($style)};
  font-size: ${({ $style }) => handleDefaultFontSize($style)};
  color: ${({ $style }) => handleColor($style)};
  font-weight: ${({ $style }) => handleFontWeight($style)};
  text-align: ${({ $style }) => handleTextAlign($style)};
  letter-spacing: ${({ $style }) => handleLetterSpacing($style)};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    padding: ${({ $style }) => handleSmallPadding($style)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: ${({ $style }) => handleMediumPadding($style)};
    font-size: ${({ $style }) => handleMediumFontSize($style)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ $style }) => handleLargeFontSize($style)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ $style }) => handleLargeFontSize($style)};
  }
`;

const ParagraphElement = ({ render, style }) => {
  return (
    <ComponentContainer $style={style}>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;