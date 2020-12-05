import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Header, HowImage, HowText, Options, PokemonCards, Statistics, SummaryCards } from "components/page/home";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Home = () => {
  usePageTracking("Home");

  return (
    <LayoutContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
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