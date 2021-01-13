import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/shared/layout";
import iconList from "utilities/icons/iconList";

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

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 80%;
  }
`;

const ImageContainer = styled(ElementContainer)`
  width: 90%;
  background-image: ${({ type }) => handleType(type)};
  margin: 1rem 1rem 1rem 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 50%;
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

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.secondary};
`;

const Item = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.secondary};
  padding: 0.5rem 0 0.5rem 0;
`;

const Span = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.primaryDark};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.medium};
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
      <ImageContainer type={pokemonData.typeOne}>
        <PokemonImage src={pokemonData.src} alt="random pokemon image" loading="lazy" />
      </ImageContainer>
      <DataContainer type={pokemonData.typeOne}>
        <Title>Identity:</Title>
        <Item><Icon icon={iconList.idCard}></Icon>Name:&nbsp;<Span>{pokemonData.name}</Span></Item>
        <Item><Icon icon={iconList.tag}></Icon>ID:&nbsp;<Span>{pokemonData.id}</Span></Item>
        {!pokemonData.typeTwo ? 
        <Item><Icon icon={iconList.codeBranch}></Icon>Type:&nbsp;<Span>{pokemonData.typeOne}</Span></Item> :
        <Item><Icon icon={iconList.codeBranch}></Icon>Type:&nbsp;<Span>{pokemonData.typeOne}</Span> / <Span>{pokemonData.typeTwo}</Span></Item>}
      </DataContainer>
      <DataContainer type={pokemonData.typeOne}>
        <Title>Statistics:</Title>
        <Item><Icon icon={iconList.heart}></Icon>HP:&nbsp;<Span>{pokemonData.hp}</Span></Item>
        <Item><Icon icon={iconList.hamsa}></Icon>Attack:&nbsp;<Span>{pokemonData.attack}</Span></Item>
        <Item><Icon icon={iconList.scroll}></Icon>Defense:&nbsp;<Span>{pokemonData.defense}</Span></Item>
        <Item><Icon icon={iconList.rocket}></Icon>Speed:&nbsp;<Span>{pokemonData.speed}</Span></Item>
      </DataContainer>
    </ComponentContainer>
  );
};

export default Result;