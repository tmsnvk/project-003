import React from "react";
import styled from "styled-components";
import { mediaq } from "../variables/styling";
import WelcomeText from "../layoutcomponents/home/WelcomeText";
import Summary from "../layoutcomponents/home/Summary";
import PokemonImages from "../layoutcomponents/home/PokemonImages";
import HowImage from "../layoutcomponents/home/HowImage";
import HowText from "../layoutcomponents/home/HowText";
import Stats from "../layoutcomponents/home/Stats";
import Options from "../layoutcomponents/home/Options";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const HomeLayout = () => {
  return (
    <LayoutContainer>
      <WelcomeText />
      <Summary />
      <PokemonImages />
      <HowImage />
      <HowText />
      <Stats />
      <Options />
    </LayoutContainer>
  );
};

export default HomeLayout;