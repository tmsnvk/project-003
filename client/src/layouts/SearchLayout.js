import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaq } from "../variables/styling";
import Search from "../layoutcomponents/search/Search";
import Result from "../layoutcomponents/search/Result";
import axios from "axios";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SearchLayout = () => {
  const [flag, setFlag] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({ name: "", id: "", typeOne: [], typeTwo: [], statistics: [0, 1, 2, 3, 4, 5] });

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`/pokemon/${pokemon}`);

        if (data.types.length === 1) {
          setPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, statistics: data.stats });
        } else {
          setPokemonData({ name: data.name, id: data.id, typeOne: data.types[0].type.name, typeTwo: data.types[1].type.name, statistics: data.stats });
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    console.log(pokemonData);
    if (flag) {
      response();
      setFlag(false);
    }
  }, [pokemon, pokemonData, flag]);

console.log(pokemonData.types);
  return (
    <LayoutContainer>
      <Search pokemonSelection={(pokemon) => {setPokemon(pokemon)}} flagSelection={(flag) => {setFlag(flag)}} />
      <Result pokemonData={pokemonData} />
    </LayoutContainer>
  );
};

export default SearchLayout;