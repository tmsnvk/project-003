import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import styled from "styled-components";
import { BACKEND_ROOT } from "utilities/constants/urls";
import { Header, Result, SearchForm } from "components/page/search";
import { LayoutContainerDefault } from "components/shared/layout";
import { LoadingSpinner } from "components/shared/utilities";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import data from "./data";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Search = () => {
  usePageTracking(data.title.searc);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState({ name: "", id: 0, typeOne: "", typeTwo: "", hp: 0, attack: 0, defense: 0, speed: 0, src: "" });
  const [loading, setLoading] = useState(false);
  const [hideTutorial, setHideTutorial] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(`${BACKEND_ROOT}/pokemon/data/${selectedPokemon}`);
        setPokemonData({
          name: data.name,
          id: data.id,
          typeOne: data.typeOne,
          typeTwo: data?.typeTwo,
          hp: data.hp,
          attack: data.attack,
          defense: data.defense,
          speed: data.speed,
          src: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
        });

        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        setLoading(false);
        console.log(`===> The error is - ${error} <===`);
      }
    };

    if (selectedPokemon !== null) response();

    return () => {
      setSelectedPokemon(null);
      setPokemonData({ name: "", id: 0, typeOne: "", typeTwo: "", hp: 0, attack: 0, defense: 0, speed: 0, src: "" });
    };
  }, [selectedPokemon, setLoading]);

  const handleSelectedPokemon = (selectedPokemon) => setSelectedPokemon(selectedPokemon.toLowerCase());
  const handleTutorial = (tutorial) => setHideTutorial(tutorial);

  return (
    <LayoutContainer>
      <Helmet>
        <title>{data.title.search}</title>
      </Helmet>
      <Header />
      <SearchForm selectedPokemon={handleSelectedPokemon} tutorial={handleTutorial} hideTutorial={hideTutorial} />
      {loading ? hideTutorial && <LoadingSpinner render={"Searching our database... Please wait!"} /> : hideTutorial && <Result pokemonData={pokemonData} />}
    </LayoutContainer>
  );
};

export default Search;