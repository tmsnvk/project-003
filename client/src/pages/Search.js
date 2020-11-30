import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Header, Result, SearchForm } from "components/page/search";
import { LayoutContainerDefault } from "components/shared/layout";
import { LoadingSpinner } from "components/shared/utilities";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Search = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);
  const [pokemonData, setPokemonData] = useState({ name: "", id: 0, typeOne: "", typeTwo: "", hp: 0, attack: 0, defense: 0, speed: 0, src: "" });
  const [loading, setLoading] = useState(false);
  const [hideTutorial, setHideTutorial] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/pokemon/${selectedPokemon}`);
        setPokemonData({
          name: data.name,
          id: data.id,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1]?.type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          src: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
        });
        setTimeout(() => setLoading(false), 1500);
      } catch (error) {
        setLoading(false);
        return console.log(`Data fetch has failed. Please check the following error message - ${error}`);
      }
    };

    if (selectedPokemon !== undefined) response();
    return () => {
      setSelectedPokemon(undefined);
      setPokemonData({ name: "", id: 0, typeOne: "", typeTwo: "", hp: 0, attack: 0, defense: 0, speed: 0, src: "" });
    };
  }, [selectedPokemon, setLoading]);

  const handleSelectedPokemon = (selectedPokemon) => setSelectedPokemon(selectedPokemon.toLowerCase());
  const handleTutorial = (tutorial) => setHideTutorial(tutorial);

  return (
    <LayoutContainer>
      <Header />
      <SearchForm selectedPokemon={handleSelectedPokemon} tutorial={handleTutorial} hideTutorial={hideTutorial} />
      {loading ? hideTutorial && <LoadingSpinner loadingMessage={"Searching database... Please wait!"} /> : hideTutorial && <Result pokemonData={pokemonData} />}
    </LayoutContainer>
  );
};

export default Search;