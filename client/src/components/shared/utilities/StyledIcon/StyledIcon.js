import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleColor = ($style) => {
  switch ($style) {
    case "FooterParagraph":
      return ({ theme }) => theme.color.grayLight;
    case "NavbarLogo":
    case "HomeHowText":
    case "HomeStatisticsData":
    case "HomeSummary":
    case "LoadingSpinner":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    case "NavbarLogo":
    case "PricingOptions":
    case "PricingOptions_Tag":
      return ({ theme }) => theme.fontSize.small;
    case "PokemonResult":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleMediumFontSize = ($style) => {
  switch ($style) {
    case "NavbarLogo":
      return ({ theme }) => theme.fontSize.large;
    case "HomeStatisticsData":
      return ({ theme }) => theme.fontSize.xxLarge;
    case "PricingOptions":
    case "PricingOptions_Tag":
    case "PokemonResult":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleDefaultMargin = ($style) => {
  switch ($style) {
    case "NavbarLogo":
    case "PricingOptions":
      return "0 0.5rem 0 0";
    case "FooterParagraph":
      return "1.5rem 0 1.5rem 0";
    case "HomeHowText":
    case "HomeSummary":
      return "1rem 1rem 1rem 1rem";
    case "PricingOptions_Tag":
    case "PokemonResult":
      return "0 1rem 0 0";
    case "LoadingSpinner":
      return "2rem 0 2rem 0";
    default:
      return "0 0 0 0";
  }
};

const handleVerticalAlign = ($style) => {
  switch ($style) {
    case "PricingOptions_Tag":
      return "super";
    default:
      return "baseline";
  }
};

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: ${({ $style }) => handleDefaultMargin($style)};
  color: ${({ $style }) => handleColor($style)};
  font-size: ${({ $style }) => handleDefaultFontSize($style)};
  vertical-align: ${({ $style }) => handleVerticalAlign($style)};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $style }) => handleMediumFontSize($style)};
  }
`;

const StyledIcon = ({ icon, spin, $style }) => {
  return (
    <ComponentContainer icon={icon} spin={spin} $style={$style}></ComponentContainer>
  );
};

export default StyledIcon;