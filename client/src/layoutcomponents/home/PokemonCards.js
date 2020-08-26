import React from "react";
import styled from "styled-components";
import ElementContainer from "../../commoncomponents/ElementContainer";

const ComponentContainer = styled.section`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 95%;
  }
`;

const ItemContainer = styled(ElementContainer)`
  text-align: center;
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25%;
    margin: 0 1.5rem 0 1.5rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 100%;
  }
`;

const ItemImage = styled.img`
  max-width: 70%;
`;

const PokemonCards = () => {
  const getPokemonId = (min = 1, max = 151) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const componentData = [
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
      id: 1
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
      id: 2
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
      id: 3
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId()}.png`,
      id: 4
    }
  ]
  
  const renderComponentData = componentData.map(({ url, id }) => {
    return (
      <ItemContainer key={id}>
        <ItemImage src={url} alt="random pokemon image" />
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default PokemonCards;