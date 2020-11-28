import React from "react";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Header, HowImage, HowText, Options, PokemonCards, Statistics, SummaryCards } from "components/page/home";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Home = () => {
  return (
    <LayoutContainer>
      <Header />
      <SummaryCards />
      <PokemonCards />
      <HowImage />
      <HowText />
      <Statistics />
      <Options />
    </LayoutContainer>
  );
};

export default Home;