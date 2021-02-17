import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  margin: auto;
  padding: 0 0 2rem 0;
  color: ${({ theme }) => theme.color.orangeDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  font-weight: 600;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 5rem 0 2rem;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const ParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;