import React from "react";
import styled from "styled-components";
import { color, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  display: none;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    width: 80%;
    margin: 0 0 0 5rem;
    padding: 1rem 1rem 1rem 1rem;
    background-color: ${color.background.mainDark};
    box-shadow: 1px 2px 5px 1px ${color.shadow.main};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 90%;
  transform: scaleX(-1);
`;

const HowImage = () => {
  return (
    <ComponentContainer>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="pikachu image" />
    </ComponentContainer>
  );
};

export default HowImage;