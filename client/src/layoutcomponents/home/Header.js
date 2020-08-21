import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";
import ElementContainer from "../common/ElementContainer";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 10rem auto 0;
  width: 90%;
  text-align: center;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    width: 60%;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
  }
`;

const WelcomeTitleMain = styled.h1`
  font-size: ${fontsize.large};
  text-transform: uppercase;
  padding: 2rem 0 2rem 0;
`;

const WelcomeTitleSub = styled.h2`
  font-size: ${fontsize.medium};
  padding: 0 0 3rem 0;
  font-weight: normal;

  &:after {
    content: " ";
    display: block;
    padding: 3rem 0 0 0;
    border-bottom: 2px solid ${color.font.secondary};
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const WelcomeMessage = styled.div`
  font-size: ${fontsize.small};

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <WelcomeTitleMain>Welcome to Central Kanto Pokemon Database!</WelcomeTitleMain>
      <WelcomeTitleSub>Get your Kanto Pokemon info here - and get it fast!</WelcomeTitleSub>
      <WelcomeMessage>Hi there! We're CKPD, your new premium Kanto Pokemon information data service. We know catching Pokemon is a stressful & exhausting profession. We're here to help & provide data to optimize your Pokemon hunts within the Kanto region.</WelcomeMessage>
    </ComponentContainer>
  );
};

export default Header;