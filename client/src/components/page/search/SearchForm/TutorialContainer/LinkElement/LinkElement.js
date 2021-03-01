import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  color: ${({ theme }) => theme.color.blueDark};

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