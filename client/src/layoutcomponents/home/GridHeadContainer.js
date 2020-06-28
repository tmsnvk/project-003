import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-head;
  text-align: center;
  margin: 20rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
`;

const GridHeadTitle = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0 0 3rem 0;
  font-weight: normal;

  &:after {
    content: " ";
    display: block;
    padding: 3rem 0 0 0;
    border-bottom: 2px solid var(--font-color-tertiary);
    width: 50%;
    margin: 0 auto;
  }
`;

const GridHeadMessage = styled.div`
  font-size: 1.8rem;
`;

const GridHeadContainer = () => {
  return (
    <ComponentContainer>
      <GridHeadTitle>Get your Kanto Pokemon info here - and get it fast!</GridHeadTitle>
      <GridHeadMessage>Hi there!</GridHeadMessage> 
      <GridHeadMessage>We're CKPD, your new premium Kanto Pokemon information data service. We know catching Pokemon is a stressful & exhausting profession. We're here to help &provide data to optimize your Pokemon hunts within the Kanto region.</GridHeadMessage>
    </ComponentContainer>
  );
};

export default GridHeadContainer;