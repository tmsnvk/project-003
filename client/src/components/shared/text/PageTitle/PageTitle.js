import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h1`
  padding: 2rem 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  text-transform: uppercase;

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

const PageTitle = ({ data }) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default PageTitle;