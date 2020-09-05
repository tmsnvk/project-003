import React from "react";
import styled from "styled-components";
import ElementContainer from "components/commoncomponents/ElementContainer";
import HeaderMainTitle from "components/commoncomponents/HeaderMainTitle";
import HeaderSubTitle from "components/commoncomponents/HeaderSubTitle";
import HeaderMessage from "components/commoncomponents/HeaderMessage";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 10rem auto 0;
  width: 90%;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <HeaderMainTitle>Welcome to Central Kanto Pokemon Database!</HeaderMainTitle>
      <HeaderSubTitle>Get your Kanto Pokemon info here - and get it fast!</HeaderSubTitle>
      <HeaderMessage>Hi there! We're CKPD, your new premium Kanto Pokemon information data service. We know catching Pokemon is a stressful & exhausting profession. We're here to help & provide data to optimize your Pokemon hunts within the Kanto region.</HeaderMessage>
    </ComponentContainer>
  );
};

export default Header;