import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../layoutcomponents/search/Header";
import Search from "../layoutcomponents/search/Search";
import Result from "../layoutcomponents/search/Result";
import axios from "axios";

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
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState({ name: "", id: null, typeOne: [], typeTwo: [], statistics: ["", "", "", "", "", ""] });
  const [hideTutorial, setHideTutorial] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`/pokemon/${selectedPokemon}`);
        if (data.types.length === 1) {
          setPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, statistics: data.stats });
        } else {
          setPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, typeTwo: data.types[1].type.name, statistics: data.stats });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedPokemon !== null) {
      response();
      setSelectedPokemon(null);
    }
  }, [selectedPokemon]);

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
      {hideTutorial && <Result pokemonData={pokemonData} />}
    </LayoutContainer>
  );
};

export default SearchLayout;