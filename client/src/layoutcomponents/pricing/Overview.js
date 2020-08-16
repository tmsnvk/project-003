import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 10rem auto 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }
`;

const Image = styled.img`
  display: none;

  @media only screen and (min-width: ${mediaq.small}) {
    display: flex;
    width: 20%;
    transform: scaleX(-1);
    padding: 0 0 0 1rem;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    padding: 0 0 0 3rem;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    width: 15%;
  }
`;

const Title = styled.h2`
  font-size: ${fontsize.small};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid ${color.font.mainDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const Overview = () => {
  return (
    <ComponentContainer>
        <Image src="https://pokeres.bastionbot.org/images/pokemon/133.png" alt="eevee" />
        <Title>Pricing overview - Select your plan!</Title>
    </ComponentContainer>
  );
};

export default Overview;