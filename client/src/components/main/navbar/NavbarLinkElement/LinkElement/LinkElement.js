import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  padding: 2rem 1rem 2rem 1rem;
  color: ${({ $altColor, theme: { color }}) => $altColor ? color.orangeDark : color.blueDark};
  letter-spacing: 0.2rem;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 2rem 2.5rem 2rem 0;
  }
`;

const LinkElement = ({ link, render, altColor }) => {
  return (
    <ComponentContainer to={link} $altColor={altColor}>
      {render}
    </ComponentContainer>
  );
};

export default LinkElement;