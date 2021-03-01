import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  display: block;
  width: 50%;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.color.grayLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ $alternate, theme: { color } }) => $alternate ? color.orangeDark : color.blueDark};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
  text-decoration: none;
  text-align: center;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayDark};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const OptionButton = ({ to, alternate, render }) => {
  return (
    <ComponentContainer to={to} $alternate={alternate}>
      {render}
    </ComponentContainer>
  );
};

export default OptionButton;