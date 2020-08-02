import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-how-image;
  text-align: center;
  margin: 5rem 0 0 5rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

const Image = styled.img`
  width: 80%;
  transform: scaleX(-1);
`;

const GridHowImageContainer = () => {
  return (
    <ComponentContainer>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="pikachu image" />
    </ComponentContainer>
  );
};

export default GridHowImageContainer;