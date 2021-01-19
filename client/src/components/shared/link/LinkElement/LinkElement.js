import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const handleDefaultPadding = ($style) => {
  switch ($style) {
    case "NavbarLinkElement_LinkElement":
    case "NavbarLinkElement_LinkElement_Alternate":
      return "2rem 1rem 2rem 1rem";
    case "FooterParagraphElement_LinkElement":
      return "1rem 1.5rem 1.5rem 1.5rem";
    default:
      return "0 0 0 0";
  }
};

const handleMediumPadding = ($style) => {
  switch ($style) {
    case "NavbarLogoElement_LinkElement":
      return "0 0 0 5rem";
    case "NavbarLinkElement_LinkElement":
    case "NavbarLinkElement_LinkElement_Alternate":
      return "2rem 2.5rem 2rem 0";
    case "FooterParagraphElement_LinkElement":
      return "1rem 1.5rem 1.5rem 1.5rem";
    default:
      return "0 0 0 0";
  }
};

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    default:
      return ({ theme }) => theme.fontSize.small;
  }
};

const handleMediumFontSize = ($style) => {
  switch ($style) {
    case "NavbarLinkElement_LinkElement":
    case "NavbarLinkElement_LinkElement_Alternate":
    case "NavbarLogoElement_LinkElement":
      return ({ theme }) => theme.fontSize.large;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleColor = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_LinkElement":
      return ({ theme }) => theme.color.grayLight;
    case "NavbarLogoElement_LinkElement":
    case "NavbarLinkElement_LinkElement":
      return ({ theme }) => theme.color.blueDark;
    case "NavbarLinkElement_LinkElement_Alternate":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleHoverColor = ($style) => {
  switch ($style) {
    case "NavbarLinkElement_LinkElement":
    case "NavbarLinkElement_LinkElement_Alternate":
      return null;
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.blueDark;
  }
};

const handleLetterSpacing = ($style) => {
  switch ($style) {
    case "NavbarLogoElement_LinkElement":
      return "0.1rem";
    case "NavbarLinkElement_LinkElement":
    case "NavbarLinkElement_LinkElement_Alternate":
      return "0.2rem";
    default:
      return "0";
  }
};

const handleOpacity = ($style) => {
  switch ($style) {
    case "FooterParagraphElement_LinkElement":
      return "0.7";
    default:
      return "1";
  }
};

const ComponentContainer = styled(Link)`
  display: inline;
  padding: ${({ $style }) => handleDefaultPadding($style)};
  font-size: ${({ $style }) => handleDefaultFontSize($style)};
  color: ${({ $style }) => handleColor($style)};
  letter-spacing: ${({ $style }) => handleLetterSpacing($style)};
  opacity: ${({ $style }) => handleOpacity($style)};
  cursor: pointer;

  &:hover {
    color: ${({ $style }) => handleHoverColor($style)};
    opacity: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: ${({ $style }) => handleMediumPadding($style)};
    font-size: ${({ $style }) => handleMediumFontSize($style)};
  }
`;

const LinkElement = ({ to, render, style }) => {
  return (
    <ComponentContainer to={to} $style={style}>
      {render}
    </ComponentContainer>
  );
};

export default LinkElement;