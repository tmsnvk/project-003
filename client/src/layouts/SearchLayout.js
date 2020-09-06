import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Header, Result, Search } from "components/layoutcomponents/search";
import { LoadingSpinner } from "components/commoncomponents";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SearchLayout = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);
  const [pokemonData, setPokemonData] = useState({ name: "", id: null, typeOne: "", typeTwo: "", hp: null, attack: null, defense: null, speed: null, src: "" });
  const [loading, setLoading] = useState(false);
  const [hideTutorial, setHideTutorial] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/pokemon/${selectedPokemon}`);
        setPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, typeTwo: data.types[1]?.type.name, hp: data.stats[0].base_stat, attack: data.stats[1].base_stat,defense: data.stats[4].base_stat, speed: data.stats[5].base_stat, src: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png` });

        setTimeout(() => setLoading(false), 1500);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (selectedPokemon !== undefined) {
      response();
      setSelectedPokemon(undefined);
    }
  }, [selectedPokemon, setLoading]);

  const handleSelectedPokemon = (selectedPokemon) => {
    setSelectedPokemon(selectedPokemon.toLowerCase());
  };

  const handleTutorial = (tutorial) => {
    setHideTutorial(tutorial);
  };

  return (
    <LayoutContainer>
      <Header />
      <Search selectedPokemon={handleSelectedPokemon} tutorial={handleTutorial} hideTutorial={hideTutorial} />
      {loading ? hideTutorial && <LoadingSpinner message={"Searching Database... Please wait!"} /> : hideTutorial && <Result pokemonData={pokemonData} />}
    </LayoutContainer>
  );
};

export default SearchLayout;