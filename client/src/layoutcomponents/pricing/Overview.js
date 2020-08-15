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
`;

const Image = styled.img`
  display: none;
  width: 20%;
  transform: scaleX(-1);
  padding: 0 0 0 1rem;
`;

const Title = styled.h2`
  font-size: ${fontsize.small};
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid ${color.font.mainDark};
    display: block;
		margin: 0 auto;
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