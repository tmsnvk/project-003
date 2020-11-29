import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  text-transform: uppercase;
  padding: 2rem 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    width: 30%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }
`;

const Title = ({ data }) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default Title;