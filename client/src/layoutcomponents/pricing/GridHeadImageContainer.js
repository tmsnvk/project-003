import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-head-img;
  margin: 20rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  text-align: center;
`;

const Image = styled.img`
  width: 50%;
  transform: scaleX(-1);
`;

const GridHeadImageContainer = () => {
  return (
    <ComponentContainer>
        <Image src="https://pokeres.bastionbot.org/images/pokemon/133.png" alt="eevee image" />
    </ComponentContainer>
  );
};

export default GridHeadImageContainer;