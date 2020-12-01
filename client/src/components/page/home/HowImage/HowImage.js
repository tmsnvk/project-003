import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";

const ComponentContainer = styled(ElementContainer)`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    width: 95%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 0 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 80%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 60%;
  transform: scaleX(-1);

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 90%;
    height: auto;
  }
`;

const HowImage = () => {
  return (
    <ComponentContainer>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="pikachu image" loading="lazy" />
    </ComponentContainer>
  );
};

export default HowImage;