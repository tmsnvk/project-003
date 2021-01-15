import React from "react";
import styled from "styled-components";
import CardItems from "./CardItems";

const ComponentContainer = styled.section`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 95%;
  }
`;

const PokemonCards = () => {
  return (
    <ComponentContainer>
      <CardItems />
    </ComponentContainer>
  );
};

export default PokemonCards;