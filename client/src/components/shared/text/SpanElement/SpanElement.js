import React from "react";
import styled from "styled-components";

const handleDefaultFontSize = ($style) => {
  switch ($style) {
    case "PricingOptions_Tag":
    case "PokemonResult":
      return ({ theme }) => theme.fontSize.large;
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleColor = ($style) => {
  switch ($style) {
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleFontWeight = ($style) => {
  switch ($style) {
    case "HomeOptions":
    case "PokemonResult":
      return "600";
    default:
      return "400";
  }
};

const ComponentContainer = styled.span`
  font-size: ${({ $style }) => handleDefaultFontSize($style)};
  color: ${({ $style }) => handleColor($style)};
  font-weight: ${({ $style }) => handleFontWeight($style)};
`;

const SpanElement = ({ render, style }) => {
  return (
    <ComponentContainer $style={style}>
      {render}
    </ComponentContainer>
  );
};

export default SpanElement;