import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0 0 1rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  font-weight: 600;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const FiguresParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default FiguresParagraphElement;