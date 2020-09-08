import React from "react";
import styled from "styled-components";
import { ElementContainer, HeaderMainTitle } from "components/commoncomponents";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }
`;

const Image = styled.img`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    display: flex;
    width: 25%;
    transform: scaleX(-1);
    padding: 0 0 0 3rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 15%;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
        <Image src="https://pokeres.bastionbot.org/images/pokemon/133.png" alt="eevee image" />
        <HeaderMainTitle>Pricing overview - Select your plan!</HeaderMainTitle>
    </ComponentContainer>
  );
};

export default Header;