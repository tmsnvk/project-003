import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-how-image;
  text-align: center;
  margin: 3rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
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