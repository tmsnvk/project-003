import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-head;
  margin: 10rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  text-align: center;
  border-radius: 1rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding: 2rem 0 2rem 0;
  transition: all 0.4s ease;
`;

const GridHeadTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0 0 3rem 0;
  font-weight: normal;

  &:after {
    content: " ";
    display: block;
    padding: 3rem 0 0 0;
    border-bottom: 2px solid var(--font-color-three);
    width: 50%;
    margin: 0 auto;
  }
`;

const GridHeadMessage = styled.div`
  font-size: 1.5rem;
`;

const GridHeadContainer = () => {
  return (
    <ComponentContainer>
      <WelcomeTitle>Welcome to Central Kanto Pokemon Database!</WelcomeTitle>
      <GridHeadTitle>Get your Kanto Pokemon info here - and get it fast!</GridHeadTitle>
      <GridHeadMessage>Hi there! We're CKPD, your new premium Kanto Pokemon information data service. We know catching Pokemon is a stressful & exhausting profession. We're here to help & provide data to optimize your Pokemon hunts within the Kanto region.</GridHeadMessage>
    </ComponentContainer>
  );
};

export default GridHeadContainer;