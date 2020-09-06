import React from "react";
import styled from "styled-components";
import { ElementContainer, HeaderMainTitle } from "components/commoncomponents";
const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 10rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <HeaderMainTitle>Search Database - Select a Pokemon!</HeaderMainTitle>
    </ComponentContainer>
  )
};

export default Header;