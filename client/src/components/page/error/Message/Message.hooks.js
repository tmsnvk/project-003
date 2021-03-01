import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_ROOT } from "utilities/constants/urls";
import getPokemonId from "utilities/helpers/functions/getPokemonId";

export const useErrorMessage = () => {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    setPokemonId(getPokemonId());
  }, []);

  useEffect(() => {
    const getPokemonName = async () => {
      if (pokemonId !== 0) {
        try {
          const { data } = await axios.get(`${BACKEND_ROOT}/pokemon/data/${pokemonId}`);
          setPokemonName(data.name);
        } catch (error) {
          console.log(`===> The error is - ${error} <===`);
        }
      }
    };

    getPokemonName();
  }, [pokemonId]);

  return { pokemonName, pokemonId };
};