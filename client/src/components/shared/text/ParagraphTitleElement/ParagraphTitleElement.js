import React from "react";
import styled from "styled-components";

const handleColor = ($style) => {
  switch ($style) {
    case "PokemonResult":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const handleTextTransform = ($style) => {
  switch ($style) {
    case "PokemonResult":
      return "uppercase";
    default:
      return null;
  }
};

const ComponentContainer = styled.p`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ $style }) => handleColor($style)};
  font-weight: 600;
  text-align: center;
  text-transform: ${({ $style }) => handleTextTransform($style)};

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.blueDark};
    width: 33%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const ParagraphTitleElement = ({ render, style }) => {
  return (
    <ComponentContainer $style={style}>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphTitleElement;