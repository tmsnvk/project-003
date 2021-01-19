import React from "react";
import styled from "styled-components";

const handleDefaultFontSize = ($fontsize) => {
  switch ($fontsize) {
    default:
      return ({ theme }) => theme.fontSize.medium;
  }
};

const handleColor = ($color) => {
  switch ($color) {
    default:
      return ({ theme }) => theme.color.grayDark;
  }
};

const ComponentContainer = styled.span`
  font-size: ${({ $fontsize }) => handleDefaultFontSize($fontsize)};
  color: ${({ $color }) => handleColor($color)};
  font-weight: 600;
`;

const SpanElement = ({ render, fontsize, color }) => {
  return (
    <ComponentContainer
      $fontsize={fontsize}
      $color={color}
    >
      {render}
    </ComponentContainer>
  );
};

export default SpanElement;