import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import data from "./data";

const ComponentContainer = styled.div`
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

const Container = styled(ElementContainer)`
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 25%;
    margin: 0 1.5rem 0 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 70%;
`;

const PokemonCards = () => {
  const renderComponentData = data.map(({ id, url }) => {
    return (
      <Container key={id}>
        <Image src={url} alt="random pokemon image" loading="lazy" />
      </Container>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default PokemonCards;