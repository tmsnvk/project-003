import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleColor = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_StyledIcon":
      return ({ theme }) => theme.color.grayLight;
    case "NavbarLogoElement_StyledIcon":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    case "NavbarLogoElement_StyledIcon":
    case "pricingoptions":
      return ({ theme }) => theme.fontSize.small;
    case "searchresult":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleMediumFontSize = ($style) => {
  switch ($style) {
    case "NavbarLogoElement_StyledIcon":
      return ({ theme }) => theme.fontSize.large;
    case "homestatsicon":
      return ({ theme }) => theme.fontSize.xxLarge;
    case "pricingoptions":
    case "searchresult":
      return ({ theme }) => theme.fontSize.medium;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleDefaultMargin = ($style) => {
  switch ($style) {
    case "NavbarLogoElement_StyledIcon":
      return "0 0.5rem 0 0";
    case "FooterParagraphElement_StyledIcon":
      return "1.5rem 0 1.5rem 0";
    case "homehowtext":
    case "homesummary":
      return "1rem 1rem 1rem 1rem";
    case "pricingoptions":
    case "searchresult":
      return "0 1rem 0 0";
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: ${({ $style }) => handleDefaultMargin($style)};
  color: ${({ $style }) => handleColor($style)};
  font-size: ${({ $style }) => handleDefaultFontSize($style)};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $style }) => handleMediumFontSize($style)};
  }
`;

const StyledIcon = ({ icon, spin, style }) => {
  return (
    <ComponentContainer icon={icon} spin={spin} $style={style}></ComponentContainer>
  );
};

export default StyledIcon;