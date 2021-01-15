import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const handleDefaultFontSize = ($fontsize) => {
  switch ($fontsize) {
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($fontsize) => {
  switch ($fontsize) {
    case "navlinks":
      return ({ theme }) => theme.fontSize.large;
    case "navlogo":
      return ({ theme }) => theme.fontSize.large;
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
      return ({ theme }) => theme.color.blueDark;
  }
};

const handleHoverColor = ($hover) => {
  switch ($hover) {
    case "nohover":
      return null;
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.blueDark;
  }
};

const handleDefaultPadding = ($padding) => {
  switch ($padding) {
    case "navlogo":
      return "0 0 1rem 0";
    case "navlinks":
      return "2rem 1rem 2rem 1rem";
    case "footerlinks":
      return "1rem 1.5rem 1.5rem 1.5rem";
    default:
      return "0 0 0 0";
  }
};

const handleMediumPadding = ($padding) => {
  switch ($padding) {
    case "navlogo":
      return "0 0 0 5rem";
    case "navlinks":
      return "2rem 2.5rem 2rem 0";
    case "footerlinks":
      return "1rem 1.5rem 1.5rem 1.5rem";
    default:
      return "0 0 0 0";
  }
};

const ComponentContainer = styled(Link)`
  display: inline;
  padding: ${({ $padding }) => handleDefaultPadding($padding)};
  color: ${({ $color }) => handleColor($color)};
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};
  letter-spacing: ${({ $letterspacing }) => $letterspacing ? $letterspacing : "0"};
  opacity: ${({ $opacity }) => $opacity ? $opacity : "1"};
  cursor: pointer;

  &:hover {
    color: ${({ $hover }) => handleHoverColor($hover)};
    opacity: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: ${({ $padding }) => handleMediumPadding($padding)};
    font-size: ${({ $fontsize }) => handleMediumFontSize($fontsize)};
  }
`;

const LinkElement = ({ to, text, color, fontsize, hover, opacity, padding, letterspacing }) => {
  return (
    <ComponentContainer
      to={to}
      $color={color}
      $fontsize={fontsize}
      $hover={hover}
      $opacity={opacity}
      $padding={padding}
      $letterspacing={letterspacing}
    >
      {text}
    </ComponentContainer>
  );
};

export default LinkElement;