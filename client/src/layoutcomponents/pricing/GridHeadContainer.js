import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-head;
  margin: 10rem 5rem 0 5rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 20%;
  transform: scaleX(-1);
  padding: 0 0 0 10rem;
`;

const GridHeadTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid var(--font-color-one);
    display: block;
		margin: 0 auto;
  }
`;

const GridHeadContainer = () => {
  return (
    <ComponentContainer>
        <Image src="https://pokeres.bastionbot.org/images/pokemon/133.png" alt="eevee" />
        <GridHeadTitle>Pricing overview - Select your plan!</GridHeadTitle>
    </ComponentContainer>
  );
};

export default GridHeadContainer;