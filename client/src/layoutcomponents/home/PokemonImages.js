import React from "react";
import styled from "styled-components";
import { color, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  display: none;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }
`;

const ImageContainer = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    text-align: center;
    width: 20%;
    margin: 0 1.5rem 0 1.5rem;
    padding: 1rem 1rem 1rem 1rem;
    background-color: ${color.background.mainDark};
    box-shadow: 1px 2px 5px 1px ${color.shadow.main};
    border-radius: 1rem;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 70%;
`;

const PokemonImages = () => {
  const pokemonID = (min = 1, max = 151) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const pokeList = [
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonID()}.png`,
      id: 1
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonID()}.png`,
      id: 2
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonID()}.png`,
      id: 3
    },
    {
      url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonID()}.png`,
      id: 4
    }
  ]
  
  const renderItems = pokeList.map(({ url, id }) => {
     return (
      <ImageContainer key={id}>
        <Image src={url} />
      </ImageContainer>
     );
  })

  return (
    <ComponentContainer>
      {renderItems}
    </ComponentContainer>
  );
};

export default PokemonImages;