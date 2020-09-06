import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/commoncomponents";
import iconList from "utilities/iconList";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 80%;
  }
`;

const PokemonImageContainer = styled(ElementContainer)`
  width: 90%;
  background-image: ${({ type }) => handleType(type)};
  margin: 1rem 1rem 1rem 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraSmall}) {
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30%;
    margin: 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 20%;
  }
`;

const PokemonImage = styled.img`
  width: 100%;
`;

const DataContainer = styled(PokemonImageContainer)`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 50%;
    margin: 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 30%;
  }
`;

const DataTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.fontColor.secondary};
`;

const DataRow = styled.div`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.fontColor.secondary};
  padding: 0.5rem 0 0.5rem 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const DataSpan = styled.span`
  font-family: ${props => props.theme.fontFamily.main};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.mainDark};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const DataIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.large};
  margin: 0 1rem 0 0;
  vertical-align: middle;
`;

const handleType = (type) => {
  switch (type) {
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
      <PokemonImageContainer type={pokemonData.typeOne}>
        <PokemonImage src={pokemonData.src} alt="random pokemon image" />
      </PokemonImageContainer>
      <DataContainer type={pokemonData.typeOne}>
        <DataTitle>Identity:</DataTitle>
        <DataRow><DataIcon icon={iconList.idCard}></DataIcon>Name:&nbsp;<DataSpan>{pokemonData.name}</DataSpan></DataRow>
        <DataRow><DataIcon icon={iconList.tag}></DataIcon>ID:&nbsp;<DataSpan>{pokemonData.id}</DataSpan></DataRow>
        {!pokemonData.typeTwo ? 
        <DataRow><DataIcon icon={iconList.codeBranch}></DataIcon>Type:&nbsp;<DataSpan>{pokemonData.typeOne}</DataSpan></DataRow> :
        <DataRow><DataIcon icon={iconList.codeBranch}></DataIcon>Type:&nbsp;<DataSpan>{pokemonData.typeOne}</DataSpan> / <DataSpan>{pokemonData.typeTwo}</DataSpan></DataRow>}
      </DataContainer>
      <DataContainer type={pokemonData.typeOne}>
        <DataTitle>Statistics:</DataTitle>
        <DataRow><DataIcon icon={iconList.heart}></DataIcon>HP:&nbsp;<DataSpan>{pokemonData.hp}</DataSpan></DataRow>
        <DataRow><DataIcon icon={iconList.hamsa}></DataIcon>Attack:&nbsp;<DataSpan>{pokemonData.attack}</DataSpan></DataRow>
        <DataRow><DataIcon icon={iconList.scroll}></DataIcon>Defense:&nbsp;<DataSpan>{pokemonData.defense}</DataSpan></DataRow>
        <DataRow><DataIcon icon={iconList.rocket}></DataIcon>Speed:&nbsp;<DataSpan>{pokemonData.speed}</DataSpan></DataRow>
      </DataContainer>
    </ComponentContainer>
  );
};

export default Result;