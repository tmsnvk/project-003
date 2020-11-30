import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { InformationLink, InformationText } from "components/shared/information";
import { Image } from "components/shared/utilities";
import getPokemonId from "utilities/helpers/getPokemonId";

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

const Message = () => {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    setPokemonId(getPokemonId());
  }, []);

  useEffect(() => {
    const getPokemonName = async () => {
      if (pokemonId !== 0) {
        try {
          const { data } = await axios.get(`/pokemon/${pokemonId}`);
          setPokemonName(data.name);
        } catch (error) {
          return console.log(`Data fetch has failed. Please check the following error message - ${error}`);
        }
      }
    };

    getPokemonName();
  }, [pokemonId]);

  return (
    <ComponentContainer>
      <InformationText>{pokemonName.toUpperCase()} says the page you tried to visit doesn't exist.</InformationText>
      <InformationText>Click <InformationLink to="/">here</InformationLink> to return to our home page!</InformationText>
      {pokemonId !== 0 ? <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt="random pokemon img" loading="lazy" /> : null}
    </ComponentContainer>
  );
};

export default Message;