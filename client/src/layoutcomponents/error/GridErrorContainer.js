import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.div`
  grid-area: grid-error;
  margin: 10rem 0 5rem 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Message = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  text-align: center;
`;

const TextLink = styled(Link)`
  color: var(--font-color-three);
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--font-color-four);
  }
`;

const Image = styled.img`
  width: 50%;
  padding: 5rem 1rem 1rem 1rem;
  align-self: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
`;

const GridErrorContainer = () => {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  
  useEffect(() => {
    const getPokemonId = (min = 1, max = 151) => {
      const number = Math.floor(Math.random() * (max - min) + min);
      setPokemonId(number);
    };
      
    getPokemonId();
  }, []);

  useEffect(() => {
    const getPokemonName = async () => {
      if (pokemonId !== 0) {
        try {
          const { data } = await axios.get(`/${pokemonId}`);
          setPokemonName(data);
        } catch (error) {
          return console.log("Something is not good - data fetch has failed!");
        }
      };
    }
    
    getPokemonName();
  }, [pokemonId]);

  return (
    <ComponentContainer>
      <Message>{pokemonName.toUpperCase()} says the page you tried to enter doesn't exists.</Message>
      <Message>Click <TextLink to="/">here</TextLink> to return to our home page!</Message>
      {pokemonId !== 0 ? <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt="randompokemon" /> : <StyledIcon icon={["fas", "spinner"]}></StyledIcon>}
    </ComponentContainer>
  );
};

export default GridErrorContainer;