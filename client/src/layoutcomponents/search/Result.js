import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../../variables/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 4;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const PokemonImageContainer = styled.div`
  width: 90%;
  background-color: ${({ type }) => handleType(type)};
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${mediaq.extraSmall}) {
    width: 60%;
  }

  @media only screen and (min-width: ${mediaq.small}) {
    width: 40%;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    width: 30%;
    margin: 1rem;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
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
  font-size: ${fontsize.small};
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: 2.5rem 0 0 0;

  @media only screen and (min-width: ${mediaq.extraSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${mediaq.small}) {
    width: 50%;
    margin: 1rem;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 30%;
  }
`;

const DataTitle = styled.div`
  font-family: ${font.secondary};
  font-size: ${fontsize.large};
  color: ${color.font.secondary};
`;

const DataRow = styled.div`
  font-family: ${font.secondary};
  font-size: ${fontsize.medium};
  color: ${color.font.secondary};
  padding: 0.5rem 0 0.5rem 0;

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const DataSpan = styled.span`
  font-family: ${font.main};
  font-size: ${fontsize.small};
  color: ${color.font.mainDark};

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.medium};
  margin: 0 1rem 0 0;
  vertical-align: middle;
`;

const handleType = (type) => {
  switch (type) {
    case "bug":
      return "rgba(225, 175, 0, 0.1)"; // orange
    case "dragon":
      return "rgba(170, 65, 0, 0.1)"; // brownish
    case "electric":
      return "rgba(225, 210, 0, 0.1)"; // yellow
    case "fairy":
      return "rgba(235, 0, 235, 0.1)"; // pink
    case "fighting":
      return "rgba(135, 135, 135, 0.1)"; // gray
    case "fire":
      return "rgba(225, 55, 0, 0.1)"; // red
    case "flying":
      return "rgba(0, 135, 175, 0.1)"; // cyan
    case "grass":
      return "rgba(0, 155, 15, 0.1)"; // green
    case "ground":
      return "rgba(110, 55, 0, 0.1)"; // brown
    case "ice":
      return "rgba(20, 80, 230, 0.1)"; // light blue
    case "normal":
      return "rgba(0, 0, 0, 0.1)"; // black
    case "poison":
      return "rgba(100, 245, 0, 0.1)"; // neon green
    case "psychic":
      return "rgba(135, 0, 105, 0.1)"; // purple
    case "rock":
      return "rgba(190, 135, 0, 0.1)"; // tan
    case "water":
      return "rgba(0, 30, 205, 0.1)"; // blue
    default:
      return "white";
  }
};

const Result = ({ propPokemonData }) => {
  return (
    <ComponentContainer>
      <PokemonImageContainer type={propPokemonData.typeOne}>
        <PokemonImage src={`https://pokeres.bastionbot.org/images/pokemon/${propPokemonData.id}.png`} alt="random pokemon image" />
      </PokemonImageContainer>
      <DataContainer type={propPokemonData.typeOne}>
        <DataTitle>Main Information:</DataTitle>
        <DataRow><StyledIcon icon={["fas", "id-card"]}></StyledIcon>Name:&nbsp;<DataSpan>{propPokemonData.name}</DataSpan></DataRow>
        <DataRow><StyledIcon icon={["fas", "tag"]}></StyledIcon>ID:&nbsp;<DataSpan>{propPokemonData.id}</DataSpan></DataRow>
          {propPokemonData.typeTwo ? 
        <DataRow><StyledIcon icon={["fas", "code-branch"]}></StyledIcon>Type:&nbsp;<DataSpan>{propPokemonData.typeOne}</DataSpan> / <DataSpan>{propPokemonData.typeTwo}</DataSpan></DataRow> : 
        <DataRow><StyledIcon icon={["fas", "code-branch"]}></StyledIcon>Type:&nbsp;<DataSpan>{propPokemonData.typeOne}</DataSpan></DataRow>}
      </DataContainer>
      <DataContainer type={propPokemonData.typeOne}>
      <DataTitle>Statistics:</DataTitle>
        <DataRow><StyledIcon icon={["fas", "heart"]}></StyledIcon>HP:&nbsp;<DataSpan>{propPokemonData.statistics[0].base_stat}</DataSpan></DataRow>
        <DataRow><StyledIcon icon={["fas", "hamsa"]}></StyledIcon>Attack:&nbsp;<DataSpan>{propPokemonData.statistics[1].base_stat}</DataSpan></DataRow>
        <DataRow><StyledIcon icon={["fas", "scroll"]}></StyledIcon>Defense:&nbsp;<DataSpan>{propPokemonData.statistics[2].base_stat}</DataSpan></DataRow>
        <DataRow><StyledIcon icon={["fas", "rocket"]}></StyledIcon>Speed:&nbsp;<DataSpan>{propPokemonData.statistics[5].base_stat}</DataSpan></DataRow>
      </DataContainer>
    </ComponentContainer>
  );
};

export default Result;