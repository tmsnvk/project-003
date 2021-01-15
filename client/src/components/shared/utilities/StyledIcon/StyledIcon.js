import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleColor = ($color) => {
  switch ($color) {
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    default:
      return ({ theme }) => theme.color.blueDark;
  }
};

const handleDefaultFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "navlogo":
      return ({ theme }) => theme.fontSize.small;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleMediumFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "navlogo":
      return ({ theme }) => theme.fontSize.large;
    case "homestatsicon":
      return ({ theme }) => theme.fontSize.xxLarge;
    default:
      return ({ theme }) => theme.fontSize.xLarge;
  }
};

const handleDefaultMargin = ($margin) => {
  switch ($margin) {
    case "navlogo":
      return "0 0.5rem 0 0";
    case "footerlinks":
      return "1.5rem 0 1rem 0";
    case "homehowtext":
    case "homesummary":
      return "1rem 1rem 1rem 1rem";
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: ${({ $margin }) => handleDefaultMargin($margin)};
  color: ${({ $color }) => handleColor($color)};
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $fontsize }) => handleMediumFontSize($fontsize)};
  }
`;

const StyledIcon = ({ icon, spin, color, fontsize, margin }) => {
  return (
    <ComponentContainer
      icon={icon}
      spin={spin}
      $color={color}
      $fontsize={fontsize}
      $margin={margin}
    ></ComponentContainer>
  );
};

export default StyledIcon;