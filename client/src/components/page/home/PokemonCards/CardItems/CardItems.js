import React from "react";
import styled from "styled-components";
import { DivElementContainer } from "components/shared/layout";
import data from "./data";

const Container = styled(DivElementContainer)`
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

const CardItems = () => {
  const renderPokemonCards = data.map(({ id, url }) => {
    return (
      <Container key={id}>
        <Image src={url} alt={"random pokemon image"} loading={"lazy"} />
      </Container>
    );
  });

  return (
    <>
      {renderPokemonCards}
    </>
  );
};

export default CardItems;