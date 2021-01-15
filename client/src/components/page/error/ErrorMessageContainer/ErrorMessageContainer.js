import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { PageTitleElement, ParagraphElement } from "components/shared/text";
import { LinkElement } from "components/shared/link";
import { Image } from "components/shared/utilities";
import getPokemonId from "utilities/helpers/getPokemonId";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
  margin: 15rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 5;
  }
`;

const ErrorMessageContainer = () => {
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
          console.log(`===> Data fetch has failed. Please check the following error message - ${error} <===`);
        }
      }
    };

    getPokemonName();
  }, [pokemonId]);

  return (
    <ComponentContainer>
      <PageTitleElement render={`${pokemonName.toUpperCase()} says the page you tried to visit doesn't exist.`} />
      <ParagraphElement render={<>Click <LinkElement to={"/"} text={"here"} /> to return to our home page!</>} align={"center"} fontsize={"medium"} />
      {pokemonName !== "" ? <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt={"random pokemon image"} loading={"lazy"} /> : null}
    </ComponentContainer>
  );
};

export default ErrorMessageContainer;