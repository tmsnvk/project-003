import React from "react";
import styled from "styled-components";
import { DivElementContainer } from "components/shared/layout";
import { ParagraphTitleElement } from "components/shared/text";
import ParagraphElement from "./ParagraphElement";
import SpanElement from "./SpanElement";
import StyledIcon from "./StyledIcon";
import iconList from "utilities/icons/iconList";
import { handleType } from "./Result.helper";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 80%;
  }
`;

const ImageContainer = styled(DivElementContainer)`
  width: 90%;
  margin: 1rem 1rem 1rem 1rem;
  background-image: ${({ $type }) => handleType($type)};
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 40%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 20%;
  }
`;

const PokemonImage = styled.img`
  width: 100%;
`;

const DataContainer = styled(ImageContainer)`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 50%;
    margin: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 30%;
  }
`;

const Result = ({ pokemonData }) => {
  return (
    <ComponentContainer>
      <ImageContainer $type={pokemonData.typeOne}>
        <ParagraphTitleElement render={"Image"} />
        <PokemonImage src={pokemonData.src} alt={`${pokemonData.name} image`} loading={"lazy"} />
      </ImageContainer>
      <DataContainer $type={pokemonData.typeOne}>
        <ParagraphTitleElement render={"Identity"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.idCard} />Name: <SpanElement render={pokemonData.name} /></>} />
        <ParagraphElement render={<><StyledIcon icon={iconList.tag} />ID: <SpanElement render={pokemonData.id} /></>} />
        {!pokemonData.typeTwo ? 
        (<ParagraphElement render={<><StyledIcon icon={iconList.codeBranch} />Type: <SpanElement render={pokemonData.typeOne} /></>} />) :
        (<ParagraphElement render={<><StyledIcon icon={iconList.codeBranch} />Type: <SpanElement render={pokemonData.typeOne} /> / <SpanElement render={pokemonData.typeTwo} /></>} />)}
      </DataContainer>
      <DataContainer $type={pokemonData.typeOne}>
      <ParagraphTitleElement render={"Statistics"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.heart} />HP: <SpanElement render={pokemonData.hp} /></>} />
        <ParagraphElement render={<><StyledIcon icon={iconList.hamsa} />Attack: <SpanElement render={pokemonData.attack} /></>} />
        <ParagraphElement render={<><StyledIcon icon={iconList.scroll} />Defense: <SpanElement render={pokemonData.defense} /></>} />
        <ParagraphElement render={<><StyledIcon icon={iconList.rocket} />Speed: <SpanElement render={pokemonData.speed} /></>} />
      </DataContainer>
    </ComponentContainer>
  );
};

export default Result;