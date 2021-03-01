import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { HeaderTitleElement } from "components/shared/text";
import { Image } from "components/shared/utilities";
import ParagraphElement from "./ParagraphElement";
import { useErrorMessage } from "./Message.hooks";
import data from "./data";

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

const Message = () => {
  const { pokemonId, pokemonName } = useErrorMessage();

  return (
    <ComponentContainer>
      <HeaderTitleElement render={`${pokemonName.toUpperCase()} says the page you tried to visit doesn't exist.`} />
      <ParagraphElement render={data.message} />
      {pokemonName !== "" ? (<Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt={`${pokemonName} image`} loading={"lazy"} />) : (null)}
    </ComponentContainer>
  );
};

export default Message;