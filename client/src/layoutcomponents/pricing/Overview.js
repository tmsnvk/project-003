import React from "react";
import styled from "styled-components";
import ElementContainer from "../common/ElementContainer";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 10rem auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }
`;

const Image = styled.img`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    display: flex;
    width: 25%;
    transform: scaleX(-1);
    padding: 0 0 0 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    padding: 0 0 0 3rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 15%;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.medium};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.xLarge};
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