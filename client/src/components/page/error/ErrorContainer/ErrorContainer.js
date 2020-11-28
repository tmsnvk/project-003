import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/shared/layout";
import { Image, InformationLink, InformationText } from "components/shared";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  margin: 1rem 0 1rem 0;
`;

const ErrorContainer = () => {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    const getPokemonId = (min = 1, max = 151) => {
      const number = Math.floor(Math.random() * (max - min) + min);
      setPokemonId(number);
    };

    getPokemonId();
  }, []);

  useEffect(() => {
    const getPokemonName = async () => {
      if (pokemonId !== 0) {
        try {
          const { data } = await axios.get(`/pokemon/${pokemonId}`);
          setPokemonName(data.name);
        } catch (error) {
          return console.log("Something is not good - data fetch has failed!");
        }
      };
    }

    getPokemonName();
  }, [pokemonId]);

  return (
    <ComponentContainer>
      <InformationText>{pokemonName.toUpperCase()} says the page you tried to enter doesn't exist.</InformationText>
      <InformationText>Click <InformationLink to="/">here</InformationLink> to return to our home page!</InformationText>
      {pokemonId !== 0 ? <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt="random pokemon img" /> : <StyledIcon icon={["fas", "spinner"]}></StyledIcon>}
    </ComponentContainer>
  );
};

export default ErrorContainer;