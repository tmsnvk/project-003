import React from "react";
import styled from "styled-components";
import { DivElementContainer } from "components/shared/layout";
import { ParagraphElement, ParagraphTitleElement, SpanElement } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/icons/iconList";

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

const handleType = ($type) => {
  switch ($type) {
    case "bug":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 210, 112, 0.5))"; // dark green
    case "dark":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 146, 136, 0.5))"; // brown
    case "dragon":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 125, 250, 0.5))"; // light purple
    case "electric":
      return "radial-gradient(ellipse, #e6e7e4, rgba(250, 224, 120, 0.5))"; // yellow
    case "fairy":
      return "radial-gradient(ellipse, #e6e7e4, rgba(244, 189, 201, 0.5))"; // light pink
    case "fighting":
      return "radial-gradient(ellipse, #e6e7e4, rgba(214, 120, 115, 0.5))"; // light red
    case "fire":
      return "radial-gradient(ellipse, #e6e7e4, rgba(245, 172, 120, 0.5))"; // orange
    case "flying":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 183, 245, 0.5))"; // blue/purple
    case "ghost":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 146, 188, 0.5))"; // dark purple
    case "grass":
      return "radial-gradient(ellipse, #e6e7e4, rgba(167, 219, 141, 0.5))"; // light green
    case "ground":
      return "radial-gradient(ellipse, #e6e7e4, rgba(235, 214, 157, 0.5))"; // beige
    case "ice":
      return "radial-gradient(ellipse, #e6e7e4, rgba(188, 230, 230, 0.5))"; // cyan
    case "normal":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 198, 167, 0.5))"; // khaki
    case "poison":
      return "radial-gradient(ellipse, #e6e7e4, rgba(193, 131, 193, 0.5))"; // light purple
    case "psychic":
      return "radial-gradient(ellipse, #e6e7e4, rgba(250, 146, 178, 0.5))"; // dark pink
    case "rock":
      return "radial-gradient(ellipse, #e6e7e4, rgba(209, 193, 125, 0.5))"; // tan
    case "steel":
      return "radial-gradient(ellipse, #e6e7e4, rgba(209, 209, 224, 0.5))"; // grayish blue
    case "water":
      return "radial-gradient(ellipse, #e6e7e4, rgba(157, 183, 245, 0.5))"; // blue
    default:
      return "#d2d0d0";
  };
};

const Result = ({ pokemonData }) => {
  return (
    <ComponentContainer>
      <ImageContainer $type={pokemonData.typeOne}>
        <ParagraphTitleElement render={"Image"} $style={"PokemonResult"} />
        <PokemonImage src={pokemonData.src} alt={"random pokemon image"} loading={"lazy"} />
      </ImageContainer>
      <DataContainer $type={pokemonData.typeOne}>
        <ParagraphTitleElement render={"Identity"} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.idCard} $style={"PokemonResult"} />Name: <SpanElement render={pokemonData.name} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.tag} $style={"PokemonResult"} />ID: <SpanElement render={pokemonData.id} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
        {!pokemonData.typeTwo ? 
        <ParagraphElement render={<><StyledIcon icon={iconList.codeBranch} $style={"PokemonResult"} />Type: <SpanElement render={pokemonData.typeOne} $style={"PokemonResult"} /></>} $style={"PokemonResult"} /> :
        <ParagraphElement render={<><StyledIcon icon={iconList.codeBranch} $style={"PokemonResult"} />Type: <SpanElement render={pokemonData.typeOne} $style={"PokemonResult"} /> / <SpanElement render={pokemonData.typeTwo} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />}
      </DataContainer>
      <DataContainer $type={pokemonData.typeOne}>
      <ParagraphTitleElement render={"Statistics"} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.heart} $style={"PokemonResult"} />HP: <SpanElement render={pokemonData.hp} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.hamsa} $style={"PokemonResult"} />Attack: <SpanElement render={pokemonData.attack} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.scroll} $style={"PokemonResult"} />Defense: <SpanElement render={pokemonData.defense} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
        <ParagraphElement render={<><StyledIcon icon={iconList.rocket} $style={"PokemonResult"} />Speed: <SpanElement render={pokemonData.speed} $style={"PokemonResult"} /></>} $style={"PokemonResult"} />
      </DataContainer>
    </ComponentContainer>
  );
};

export default Result;