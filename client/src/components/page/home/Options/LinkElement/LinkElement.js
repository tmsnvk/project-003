import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.a`
  color: ${({ theme }) => theme.color.blueDark};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.orangeDark};
  }
`;

const LinkElement = ({ to, render }) => {
  return (
    <ComponentContainer to={to}>
      {render}
    </ComponentContainer>
  );
};

export default LinkElement;