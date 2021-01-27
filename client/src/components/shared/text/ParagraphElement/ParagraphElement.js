import React from "react";
import styled from "styled-components";

const handleDefaultMargin = ($style) => {
  switch ($style) {
    case "HomeStatisticsYear":
      return "auto";
    default:
      return "0 0 0 0";
  }
};

const handleDefaultPadding = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return "0.5rem 0 0 0";
    case "HomeSummary":
    case "PokemonSearch":
      return "0 0 1rem 0";
    case "HomeStatisticsDataText":
      return "0 0 0 2rem";
    case "HomeStatisticsDataFigures":
      return "0 0 1rem 1rem";
    case "HomeStatisticsYear":
    case "HomeOptions":
    case "PricingOptionsBottom":
      return "0 0 2rem 0";
    case "PricingOptions":
      return "0 0 1rem 2rem";
    case "PokemonResult":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleSmallPadding = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return "0.5rem 0 0 0";
    case "HomeSummary":
    case "PokemonSearch":
      return "0 0 1rem 0";
    case "HomeOptions":
    case "PricingOptionsBottom":
      return "0 0 2rem 0";
    case "PricingOptions":
      return "0 0 1rem 2rem";
    case "PokemonResult":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleMediumPadding = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return "0.5rem 0 0 0";
    case "HomeSummary":
    case "PokemonSearch":
      return "0 0 1rem 0";
    case "HomeStatisticsYear":
      return "0 5rem 0 2rem";
    case "HomeOptions":
    case "PricingOptionsBottom":
      return "0 0 2rem 0";
    case "PricingOptions":
      return "0 0 1rem 2rem";
    case "PokemonResult":
      return "0.5rem 0 0.5rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleFontFamily = ($style) => {
  switch ($style) {
    case "footerparagraphs":
    case "HomeSummary":
    case "FooterParagraph":
    case "HomeStatisticsYear":
    case "PokemonResult":
      return ({ theme }) => theme.fontFamily.secondary;
    default:
      return ({ theme }) => theme.fontFamily.primary;
  }
};

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    case "HomeStatisticsDataText":
    case "HomeStatisticsDataFigures":
    case "HomeStatisticsYear":
      return ({ theme }) => theme.fontSize.large;
    case "PokemonResult":
    case "ErrorMessage":
    case "SuccessMessage":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($style) => {
  switch ($style) {
    case "FooterParagraph":
    case "HomeSummary":
    case "PricingOptions":
    case "PricingOptionsBottom":
      return ({ theme }) => theme.fontSize.small;
    case "HomeStatisticsDataText":
      return ({ theme }) => theme.fontSize.large;
    case "HomeStatisticsDataFigures":
    case "HomeStatisticsYear":
      return ({ theme }) => theme.fontSize.xLarge;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleLargeFontSize = ($style) => {
  switch ($style) {
    case "FooterParagraph":
    case "HomeSummary":
      return ({ theme }) => theme.fontSize.small;
    case "HomeStatisticsDataText":
    case "PokemonResult":
      return ({ theme }) => theme.fontSize.large;
    case "HomeStatisticsDataFigures":
    case "HomeStatisticsYear":
      return ({ theme }) => theme.fontSize.xxLarge;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleColor = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return ({ theme }) => theme.color.grayLight;
    case "HomeStatisticsYear":
      return ({ theme }) => theme.color.orangeDark;
    case "PokemonResult":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleFontWeight = ($style) => {
  switch ($style) {
    case "FooterParagraph":
    case "HomeStatisticsYear":
    case "HomeStatisticsDataFigures":
    case "HomeStatisticsDataText":
    case "PricingOptionsBottom":
    case "PokemonResult":
      return "600";
    default:
      return "400";
  }
};

const handleTextAlign = ($style) => {
  switch ($style) {
    case "FooterParagraph":
    case "HomeHeader":
    case "HomeOptions":
    case "HomeStatisticsYear":
    case "HomeStatisticsDataFigures":
    case "HomeStatisticsDataText":
    case "HomeSummary":
    case "PricingOptionsBottom":
    case "PokemonSearch":
    case "ContactHeader":
    case "ErrorMessage":
    case "SuccessMessage":
      return "center";
    default:
      return "left";
  }
};

const handleLetterSpacing = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return "0.2rem";
    case "PricingOptionsBottom":
    case "PokemonResult":
      return "0.1rem";
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

const ParagraphElement = ({ render, $style }) => {
  return (
    <ComponentContainer $style={$style}>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;