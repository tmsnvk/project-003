import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};
  margin: ${({ $margin }) => handleDefaultMargin($margin)};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $fontsize }) => handleMediumFontSize($fontsize)};
  }
`;

const StyledIcon = ({ icon, spin, fontsize, margin, }) => {
  return (
    <ComponentContainer
      icon={icon}
      spin={spin}
      $fontsize={fontsize}
      $margin={margin}
    ></ComponentContainer>
  );
};

export default StyledIcon;