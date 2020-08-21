import React from "react";
import styled from "styled-components";
import Header from "../layoutcomponents/home/Header";
import SummaryCards from "../layoutcomponents/home/SummaryCards";
import PokemonCards from "../layoutcomponents/home/PokemonCards";
import HowImage from "../layoutcomponents/home/HowImage";
import HowText from "../layoutcomponents/home/HowText";
import Statistics from "../layoutcomponents/home/Statistics";
import Options from "../layoutcomponents/home/Options";

const LayoutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const HomeLayout = () => {
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

export default HomeLayout;