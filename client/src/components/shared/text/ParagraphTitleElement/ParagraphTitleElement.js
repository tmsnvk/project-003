import React from "react";
import styled from "styled-components";

const handleColor = ($color) => {
  switch ($color) {
    case "blueDark":
      return ({ theme }) => theme.color.blueDark;
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const ComponentContainer = styled.p`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ $color }) => handleColor($color)};
  font-weight: 600;
  text-align: center;
  text-transform: ${({ $titlecase }) => $titlecase ? null : "uppercase"};

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

const ParagraphTitleElement = ({ render, color, titlecase }) => {
  return (
    <ComponentContainer
      $color={color}
      $titlecase={titlecase}
    >
      {render}
    </ComponentContainer>
  );
};

export default ParagraphTitleElement;