import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  text-transform: uppercase;
  padding: 2rem 0 2rem 0;
  text-align: center;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    width: 30%;
    margin: 0 auto;
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