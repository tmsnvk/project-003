import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../layoutcomponents/search/Search";
import Result from "../layoutcomponents/search/Result";
import axios from "axios";

const LayoutContainer = styled.div`
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
  const [initiateData, setInitiateData] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [getPokemonData, setGetPokemonData] = useState({ name: "", id: "", typeOne: [], typeTwo: [], statistics: ["", "", "", "", "", ""] });
  const [hideTutorial, setHideTutorial] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`/pokemon/${selectedPokemon}`);
        if (data.types.length === 1) {
          setGetPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, statistics: data.stats });
        } else {
          setGetPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, typeTwo: data.types[1].type.name, statistics: data.stats });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (initiateData) {
      response();
      setInitiateData(false);
    }
  }, [selectedPokemon, getPokemonData, initiateData]);

  const handleSelectedPokemon = (selectedPokemon) => {
    setSelectedPokemon(selectedPokemon.toLowerCase());
  };

  const handleInitiateData = (initiateData) => {
    setInitiateData(initiateData);
  };

  const tutorial = () => {
    setHideTutorial(true);
  };

  return (
    <LayoutContainer>
      <Search selectedPokemon={handleSelectedPokemon} initiateData={handleInitiateData} hideTutorial={hideTutorial} tutorial={tutorial} />
      {hideTutorial && <Result pokemonData={getPokemonData} />}
    </LayoutContainer>
  );
};

export default SearchLayout;