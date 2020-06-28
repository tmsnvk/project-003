import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-image;
  display: flex;
  flex-direction: row;
  margin: 3rem 0 3rem 0;
`;

const ImageHolder = styled.div`
  font-size: 2rem;
  text-align: center;
  width: 50%;
  height: auto;
  margin: 0 3rem 0 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

const Image = styled.img`
  max-width: 50%;
`;

const GridImageContainer = () => {
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
  
  const renderItems = pokeList.map((item) => {
     return (
      <ImageHolder key={item.id}>
        <Image src={item.url} />
      </ImageHolder>
     );
  })

  return (
    <ComponentContainer>
      {renderItems}
    </ComponentContainer>
  );
};

export default GridImageContainer;